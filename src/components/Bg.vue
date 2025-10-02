<template>
    <div ref="wrap" id="bg"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
    WebGLRenderer,
    Scene,
    PerspectiveCamera,
    BoxGeometry,
    MeshLambertMaterial,
    PlaneGeometry,
    Mesh,
    DirectionalLight,
    Color,
    TextureLoader,
    Clock
} from 'three'

const wrap = ref(null)

let renderer, scene, smokeParticles, smokeGeo, smokeMaterial, light, smokeTexture, camera, geometry, material, rafId, mesh, cubeSineDriver
let handleResize
let delta = 0;
const clock = new Clock();

onMounted(() => {

    function init() {
        const w = wrap.value.clientWidth;
        const h = wrap.value.clientHeight;

        renderer = new WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(w, h, false);
        wrap.value.appendChild(renderer.domElement);

        scene = new Scene();
        scene.background = new Color("#020f1c");

        camera = new PerspectiveCamera(
            75,
            w / h,
            1,
            10000
        );
        camera.position.z = 1000;
        scene.add(camera);

        geometry = new BoxGeometry(200, 200, 200);
        material = new MeshLambertMaterial({
            color: new Color("#17202d"),
            wireframe: false
        });

        mesh = new Mesh(geometry, material);
        cubeSineDriver = 0;

        light = new DirectionalLight(0xffffff, 1);
        light.position.set(-1, 0, 1);
        scene.add(light);
        const textureLoader = new TextureLoader()
        smokeTexture = textureLoader.load(
            "./Smoke.png"
        );
        smokeTexture.center.set(0.5, 0.5);

        smokeMaterial = new MeshLambertMaterial({
            color: new Color("#17202d"),
            map: smokeTexture,
            transparent: true
        });
        smokeGeo = new PlaneGeometry(300, 300);
        smokeParticles = [];

        for (let p = 0; p < 150; p++) {
            var particle = new Mesh(smokeGeo, smokeMaterial);
            particle.position.set(
                Math.random() * 500 - 250,
                Math.random() * 500 - 250,
                Math.random() * 1000 - 100
            );
            particle.rotation.z = Math.random() * 360;
            scene.add(particle);
            smokeParticles.push(particle);
        }

    }

    handleResize = () => {
        const newW = wrap.value.clientWidth;
        const newH = wrap.value.clientHeight;
        renderer.setSize(newW, newH, false)
        camera.aspect = newW / newH
        camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', handleResize)

    const tick = () => {
        delta = clock.getDelta()
        rafId = requestAnimationFrame(tick)
        evolveSmoke();
        render();
    }

    function evolveSmoke() {
        var sp = smokeParticles.length;
        while (sp--) {
            smokeParticles[sp].rotation.z += delta * 0.2;
        }
    }

    function render() {
        renderer.setClearColor(0xffffff, 0);
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.01;
        cubeSineDriver += 0.01;
        mesh.position.z = 100 + Math.sin(cubeSineDriver) * 500;
        renderer.render(scene, camera);
    }

    init();
    tick();

})

onUnmounted(() => {
    cancelAnimationFrame(rafId)
    window.removeEventListener('resize', handleResize)
    renderer?.dispose()
    geo?.dispose()
    mat?.dispose()
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
