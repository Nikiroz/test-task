<template>
    <div class="playerBlock">
        <div class="avatar">
            <img :src="avatarUrl" alt="">
        </div>
        <div class="nickname">{{ nickname }}</div>
    </div>
</template>

<script setup>
defineProps({
    avatarUrl: String,
    nickname: {
        type: String,
        default: "Player"
    }
})
</script>