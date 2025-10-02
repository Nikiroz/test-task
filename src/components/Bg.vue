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
    MeshStandardMaterial,
    Mesh,
    AmbientLight,
    DirectionalLight,
    Color
} from 'three'

const wrap = ref(null)

let renderer, scene, camera, cube, geo, mat, rafId
let handleResize

onMounted(() => {
    const w = wrap.value.clientWidth;
    const h = wrap.value.clientHeight;

    renderer = new WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(w, h, false)
    wrap.value.appendChild(renderer.domElement)

    scene = new Scene()
    scene.background = new Color(0x111827)

    camera = new PerspectiveCamera(60, w / h, 0.1, 100)
    camera.position.set(0, 0, 3)

    geo = new BoxGeometry(1, 1, 1)
    mat = new MeshStandardMaterial({ color: 0x4f46e5, roughness: 0.4, metalness: 0.1 })
    cube = new Mesh(geo, mat)
    scene.add(cube)

    scene.add(new AmbientLight(0xffffff, 0.6))
    const dir = new DirectionalLight(0xffffff, 0.8)
    dir.position.set(3, 2, 5)
    scene.add(dir)

    handleResize = () => {
        const newW = wrap.value.clientWidth;
        const newH = wrap.value.clientHeight;
        renderer.setSize(newW, newH, false)
        camera.aspect = newW / newH
        camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', handleResize)

    const tick = () => {
        rafId = requestAnimationFrame(tick)
        cube.rotation.y += 0.01
        renderer.render(scene, camera)
    }
    tick()
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
