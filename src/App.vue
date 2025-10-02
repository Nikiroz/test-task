<script setup>
import CommanderInfo from './components/Commander/Info.vue'
import PlayerResources from './components/Player/Resources.vue'
import PlayerInfo from './components/Player/Info.vue'
import CommanderAvatar from './components/Commander/Avatar.vue'
import CommanderDescription from './components/Commander/Description.vue'
</script>

<template>
  <div id="infoBlock">
    <CommanderInfo></CommanderInfo>
    <PlayerResources></PlayerResources>
    <PlayerInfo></PlayerInfo>
  </div>
  <div id="commanderBlock">
    <CommanderAvatar></CommanderAvatar>
    <CommanderDescription></CommanderDescription>
  </div>
</template>

<style scoped></style>
