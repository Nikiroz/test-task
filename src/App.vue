<script setup>
import { ref } from 'vue'
import CommanderInfo from './components/Commander_Info.vue'
import ResourcesField from './components/Resources_field.vue'
import CommanderDescription from './components/Commander_Description.vue'
import Bg from './components/Bg.vue'
const level_commander = ref(0);
const name_commander = ref("N/A");

function handleUpdate(val) {
  name_commander.value = val.name
  level_commander.value = val.level
}

</script>

<template>
  <Bg></Bg>
  <div id="infoBlock">
    <CommanderInfo :level="level_commander" :name="name_commander"></CommanderInfo>
    <ResourcesField></ResourcesField>
  </div>
  <div id="commanderBlock">
    <CommanderDescription @update="handleUpdate"></CommanderDescription>
  </div>
</template>

<style scoped></style>
