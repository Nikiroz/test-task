<script setup>
import CommanderInfo from './components/Commander_Info.vue'
import PlayerResources from './components/Player_Info.vue'
import CommanderAvatar from './components/Commander_Avatar.vue'
import CommanderDescription from './components/Commander_Description.vue'
import Bg from './components/Bg.vue'
</script>

<template>
  <Bg></Bg>
  <div id="infoBlock">
    <CommanderInfo level="16" name="Henk pröpper"></CommanderInfo>
    <PlayerResources></PlayerResources>
    <PlayerInfo></PlayerInfo>
  </div>
  <div id="commanderBlock">
    <CommanderAvatar></CommanderAvatar>
    <CommanderDescription></CommanderDescription>
  </div>
</template>

<style scoped>

</style>
