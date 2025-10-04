<template>
    <div ref="wrap" id="bg"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
    WebGLRenderer,
    Scene,
    PerspectiveCamera,
    MeshLambertMaterial,
    PlaneGeometry,
    Mesh,
    AmbientLight,
    Color,
    TextureLoader,
    Clock,
    Vector3
} from 'three'
import Stats from 'stats.js'

const stats = new Stats()
stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom)

const wrap = ref(null)

let renderer, scene, smokeBgParticles,
    light, camera, rafId,
    sparkParticles, smokeFgParticles

let handleResize;
let spawnTimer = 0;
const spawnInterval = 0.1;
const maxParticles = 40;

const clock = new Clock();

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function lerp(a, b, f) {
    return a * (1 - f) + b * f

}


class SparkParticle {
    constructor(scene) {
        this.prevPos = new Vector3();
        var rnd = Math.random() * 1 - 3;
        const geometry = new PlaneGeometry(rnd, rnd / 2);
        const textureLoader = new TextureLoader();

        const texture = textureLoader.load(
            "./Circle.png"
        );

        texture.center.set(0.5, 0.5);
        this.material = new MeshLambertMaterial({
            color: new Color("#b2e5fb"),
            map: texture,
            transparent: true
        });

        this.mesh = new Mesh(geometry, this.material);
        scene.add(this.mesh);
        this.reset();
    }

    reset() {
        this.baseX = getRandomArbitrary(-65, -25);
        this.yPos = getRandomArbitrary(-40, -35);
        this.speed = getRandomArbitrary(15, 30);
        this.freq1 = getRandomArbitrary(1, 3);
        this.freq2 = getRandomArbitrary(2, 4);
        this.amplitude1 = getRandomArbitrary(1, 7);
        this.amplitude2 = getRandomArbitrary(2, 9);
        this.offset1 = getRandomArbitrary(Math.PI, Math.PI * 25);
        this.offset2 = getRandomArbitrary(Math.PI, Math.PI * 45);
        this.opacity = getRandomArbitrary(0.5, 0.9);
        this.opacitySpeed = getRandomArbitrary(0.2, 0.4);
        this.deadEnd = getRandomArbitrary(35, 50)
    }

    update(delta, elapsed) {

        this.yPos += this.speed * delta;
        this.mesh.position.y = this.yPos;
        this.opacity -= this.opacitySpeed * delta;;
        this.material.opacity = this.opacity;

        this.mesh.position.x =
            this.baseX +
            Math.sin(elapsed * this.freq1 + this.offset1) * this.amplitude1 +
            Math.sin(elapsed * this.freq2 + this.offset2) * this.amplitude2;

        this.mesh.position.z = 950;

        let velocity = new Vector3().subVectors(this.mesh.position, this.prevPos);

        if (velocity.lengthSq() > 0.0001) {
            const angle = Math.atan2(velocity.y, velocity.x);
            this.mesh.rotation.z = angle;
        }

        this.prevPos.copy(this.mesh.position);

        if (this.yPos > this.deadEnd) {
            this.yPos = -this.deadEnd;
            this.reset();
        }

    }
}

class SmokeParticle {
    constructor(scene, size, color, x, y, z, tex = "any") {

        const textureLoader = new TextureLoader()
        if (tex == "any") {
            if (Math.random() > 0.5) {
                this.smokeTexture = textureLoader.load(
                    "./Smoke.png"
                );
            } else {
                this.smokeTexture = textureLoader.load(
                    "./Smoke2.png"
                );
            }
        } else {
            this.smokeTexture = textureLoader.load(tex);
        }

        this.smokeTexture.center.set(0.5, 0.5);

        this.material = new MeshLambertMaterial({
            color: new Color(color),
            map: this.smokeTexture,
            transparent: true
        });

        this.smokeGeo = new PlaneGeometry(size, size);

        this.mesh = new Mesh(this.smokeGeo, this.material);
        this.mesh.position.set(
            x,
            y,
            z
        );

        this.mesh.rotation.z = Math.random() * 360;

        scene.add(this.mesh);
    }

    update(delta) {
        this.mesh.rotation.z += delta * 0.2;
    }

}

class SmokeParticleBlink extends SmokeParticle {
    constructor(scene, size, color, x, y, z) {
        super(scene, size, color, x, y, z,"./Smoke.png");

        this.minOpacity = 0.3;
        this.maxOpacity = 0.8;
        this.blinkSpeed = 1 + Math.random();
        this.phase = Math.random() * Math.PI * 2;
        this.isMaxVisible = false;
        this.lerpSpeed = 5;
        this.currentOpacity = 1;
    }

    setForceVisible(on = true) {
        this.isMaxVisible = on;
    }

    update(delta) {
        super.update(delta);
        const k = 1 - Math.exp(-this.lerpSpeed * delta);
        var target = this.isMaxVisible ? this.maxOpacity : this.minOpacity;
        this.currentOpacity = lerp(this.currentOpacity, target, k);
        this.mesh.material.opacity = this.currentOpacity;
    }
}

onMounted(() => {

    function init() {
        const w = wrap.value.clientWidth;
        const h = wrap.value.clientHeight;

        renderer = new WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(w, h, false);
        wrap.value.appendChild(renderer.domElement);

        scene = new Scene();
        scene.background = new Color("#001525");

        camera = new PerspectiveCamera(
            75,
            w / h,
            1,
            10000
        );

        camera.position.z = 1000;
        scene.add(camera);

        light = new AmbientLight(0xffffff, 1);
        scene.add(light);

        smokeBgParticles = [];

        for (let i = 0; i < 150; i++) {
            smokeBgParticles.push(new SmokeParticle(
                scene,
                300,
                "#002642",
                Math.random() * 500 - 250,
                Math.random() * 500 - 250,
                Math.random() * 1000 - 100
            ));
        }

        smokeFgParticles = [];

        var xOffset = -15;
        var yOffset = -2.5;

        for (let i = 0; i < 5; i++) {
            smokeFgParticles.push(new SmokeParticleBlink(
                scene,
                20,
                "#77b0d6",
                xOffset,
                yOffset,
                990
            ));
            xOffset += 1.5;
            yOffset -= 1.7;
        }

        sparkParticles = [];
    }

    handleResize = () => {
        const newW = wrap.value.clientWidth;
        const newH = wrap.value.clientHeight;
        renderer.setSize(newW, newH, false)
        camera.aspect = newW / newH
        camera.updateProjectionMatrix()
    }

    const tick = () => {
        stats.begin()
        rafId = requestAnimationFrame(tick)

        var delta = clock.getDelta();
        const elapsed = clock.elapsedTime;

        spawnTimer += delta;
        if (spawnTimer >= spawnInterval && sparkParticles.length < maxParticles) {
            sparkParticles.push(new SparkParticle(scene));
            spawnTimer = 0;
        }

        smokeBgParticles.forEach(p => p.update(delta));
        smokeFgParticles.forEach(p => p.update(delta));
        sparkParticles.forEach(p => p.update(delta, elapsed));

        render();
        stats.end()
    }

    function render() {
        renderer.setClearColor(0xffffff, 0);
        renderer.render(scene, camera);
    }

    function click() {
        smokeFgParticles.forEach(p => p.setForceVisible(!p.isMaxVisible));
    }

    init();
    handleResize();
    tick();

    window.addEventListener('resize', handleResize);
    //window.addEventListener('click', click);

})

onUnmounted(() => {
    cancelAnimationFrame(rafId)
    window.removeEventListener('resize', handleResize);
    renderer?.dispose();
})
</script>

<style lang="scss" scoped>
#bg {
    width: 100%;
    height: 100%;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
}
</style>
