<script setup>
defineProps({
    portraitUrl: String,
    isActive: {
        type: Boolean,
        default: false
    },
})
</script>

<template>
    <div class="portrait" :class="{ active:isActive }" :style="{'--portraitMini': portraitUrl}">
        <span class="image"></span>
    </div>
</template>
