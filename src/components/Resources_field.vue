<script setup>
import Resource from './Resource.vue'
import Player_Info from './Player_info.vue';
const resources = [
    { type: 'gold', count: 250, ico: '/src/assets/commander/icon/currency_gold_c.svg' },
    { type: 'credits', count: 431.2, ico: '/src/assets/commander/icon/currency_credits_c.svg' },
    { type: 'freeXp', count: 250, ico: '/src/assets/commander/icon/currency_freeXP_c.svg', isNew: true },
    { type: 'steel', count: 50, ico: '/src/assets/commander/icon/steel_c.svg' },
    { type: 'premium', count: 359, mod: 'DAYS', ico: '/src/assets/commander/icon/premium_c.svg' },
    { type: 'lootBox', count: 0, isNew: true, mod: '', ico: '/src/assets/commander/icon/lootbox_c.svg' }
]
</script>

<template>
    <div id="PlayerInfo">
        <Resource v-for="(res, i) in resources" :key="res.type" :type="res.type" :count="res.count" :ico="res.ico"
            :is-new="res.isNew" :mod="res.mod" />
        <span class="separator"></span>
        <Player_Info nickname="test_ivcy" avatarUrl="/src/assets/commander/player/avatar.png"></Player_Info>
    </div>
</template>