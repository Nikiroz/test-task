<script setup>
defineProps({
    count: {
        type: Number,
        default: 0
    },
    ico: String,
    type: {
        type: String,
        default: "gold"
    },
    isNew: {
        type: Boolean,
        default: false
    },
    mod: {
        type: String,
        default: "K"
    }
})
</script>

<template>
    <span :class="[type, { new: isNew }]">
        {{ count }} {{ mod }}
        <span class="ico">
            <img :src="ico" alt="">
        </span>
    </span>
</template>