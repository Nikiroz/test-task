<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Portrait from './Portrait.vue'
import Commanders from '../commanders.json'

var _activeIndex = 0;
const scrollContainer = ref(null);
const activeIndex = ref(0);
const touchStartY = ref(0);
const touchDeltaY = ref(0);
const SWIPE_THRESHOLD = 30;
const commanderDescriptionBlock = ref(null);
const avatar = ref(null);

let anchorPx = 0;
let lock = false;
const emit = defineEmits(['update']);

function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v))
};

function goTo(index) {
    play(index);
}

function updateInfo() {
    emit('update', { name: Commanders[activeIndex.value].name, level: Commanders[activeIndex.value].level });;
}

function ensureAnchor() {
    const el = scrollContainer.value
    const child = el.children[activeIndex.value]
    if (!el || !child) return

    const elBox = el.getBoundingClientRect()
    const chBox = child.getBoundingClientRect()

    const offsetFromTop = (chBox.top - elBox.top) + chBox.height / 2
    anchorPx = offsetFromTop
}

function scrollPortrait() {
    const el = scrollContainer.value
    const child = el.children[activeIndex.value]
    if (!el || !child) return;
    const targetCenter = child.offsetTop + child.offsetHeight / 2
    const desired = targetCenter - anchorPx
    const maxScroll = el.scrollHeight - el.clientHeight;
    el.scrollTo({ top: clamp(desired, 0, Math.max(0, maxScroll)), behavior: 'smooth' })
    updateInfo();
}

function onWheel(e) {

    if (lock) {
        return
    };

    const dir = e.deltaY > 0 ? 1 : -1;
    const next = clamp(activeIndex.value + dir, 0, Commanders.length - 1);

    if (next === activeIndex.value) {
        return
    };

    play(next);

    lock = true;

    setTimeout(() => {
        lock = false
    }, 500);

}

function onTouchStart(e) {

    const t = e.touches?.[0];

    if (!t) {
        return
    };

    touchStartY.value = t.clientY;
    touchDeltaY.value = 0;

}

function onTouchMove(e) {
    const t = e.touches?.[0];
    if (!t) return;
    touchDeltaY.value = t.clientY - touchStartY.value;
}

function onTouchEnd() {
    if (lock.value) return;
    const dy = touchDeltaY.value;

    if (Math.abs(dy) >= SWIPE_THRESHOLD) {
        const dir = dy < 0 ? 1 : -1;
        const next = clamp(activeIndex.value + dir, 0, Commanders.length - 1)
        if (next === activeIndex.value) {
            return
        };
        if (next !== activeIndex.value) {
            play(next);
            return
        }
    }

    play(activeIndex.value);
}

function play(index) {
    _activeIndex = index;
    avatar.value.classList.add('fadeOut');
}

function onAnimEnd(e) {

    if (e.animationName === 'fadeOut') {
        avatar.value.classList.add('fadeIn');
        avatar.value.classList.remove('fadeOut');
        activeIndex.value = _activeIndex;
        nextTick(() => scrollPortrait())
    }
    if (e.animationName === 'fadeIn') {
        avatar.value.classList.remove('fadeIn');
    }
}

onMounted(() => {

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'
    }

    ensureAnchor();
    updateInfo();
});

</script>

<template>
    <div id="CommanderAvatar" ref="avatar" :style="{ '--portraitBig': Commanders[activeIndex].portraitBig }" @animationend="onAnimEnd">
    </div>
    <div id="CommanderDescription" @wheel.prevent="onWheel" @touchstart.passive="onTouchStart"
        @touchmove.prevent="onTouchMove" @touchend="onTouchEnd">
        <div class="scrollBlock">
            <div class="scrollContainer" ref="scrollContainer">
                <Portrait v-for="(item, i) in Commanders" :key="i" :portrait-url="item.portraitMini"
                    :is-active="i === activeIndex" @click="goTo(i)" />
                <div v-for="n in 7" :key="'bottom-' + n" class="spacer"></div>
            </div>
        </div>
        <div class="commanderTextBlock">

            <div class="inStock">
                <span class="block">{{ activeIndex + 1 }}/{{ Commanders.length }}</span>
                <span class="text">In stock</span>
            </div>

            <div class="description">
                <div class="commanderDescriptionBlock" ref="commanderDescriptionBlock" >
                    <h1>{{ Commanders[activeIndex].name }}</h1>
                    <p class="text">{{ Commanders[activeIndex].description }}</p>
                </div>
                <div class="type">Types of guises</div>
                <div class="textBlock">
                    <p>
                        You can select a guise that applies a bonus to battle earnings, changes your Commander's
                        appearance,
                        and/or applies special effects.
                    </p>
                    <div class="guises">
                        <div class="national">
                            <div class="div1"> <img src="../assets/commander/icon/guise_personal_c.svg" alt="">
                            </div>
                            <div class="div2">
                                <h2>National guise</h2>
                            </div>
                            <div class="div3">
                                <p>Guise can only be applied to Commanders from specific nations.</p>
                            </div>
                        </div>
                        <div class="general">
                            <div class="div1"> <img src="../assets/commander/icon/guise_national_c.svg" alt="">
                            </div>
                            <div class="div2">
                                <h2>General guise</h2>
                            </div>
                            <div class="div3">
                                <p>Guise can only be applied to all Commanders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
