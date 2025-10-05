<script setup>
import Resource from './Resource.vue'
import Player_Info from './Player_info.vue';
</script>

<template>
    <div id="PlayerInfo">
        <Resource type="gold" :count="250" ico="/src/assets/commander/icon/currency_gold_c.svg"></Resource>
        <Resource type="credits" :count="431.2" ico="/src/assets/commander/icon/currency_credits_c.svg"></Resource>
        <Resource type="freeXp" :count="250" :is-new="true" ico="/src/assets/commander/icon/currency_freeXP_c.svg"></Resource>
        <Resource type="steel" :count="50" ico="/src/assets/commander/icon/steel_c.svg"></Resource>
        <Resource type="premium" :count="359" mod="DAYS" ico="/src/assets/commander/icon/premium_c.svg"></Resource>
        <Resource type="lootBox" :count="0" :is-new="true" mod="" ico="/src/assets/commander/icon/lootbox_c.svg"></Resource>       
        <span class="separator"></span>
        <Player_Info nickname="test_ivcy" avatarUrl="/src/assets/commander/player/avatar.png" ></Player_Info>
    </div>
</template>