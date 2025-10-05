<script setup>
defineProps({
    level: String,
    name: String,
})
</script>

<template>
    <div id="commanderInfo">
        <span class="level">{{level}}
        </span>
        <span class="badge">
            <img src="../assets/commander/icon/cmd_badge_legend_4.svg" alt="">
        </span>
        <div class="rankBlock">
            <span class="name">{{ name }}</span>
            <span class="rank">rank {{level}} legendary commander</span>
        </div>
    </div>
</template>
