<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Game } from '@/classes/game-objects/Game';

let game = ref(null);

function newGame() {
    game.value = new Game();
}

function createImgUrl(url) {
    return new URL(url, import.meta.url).href;
}

function formedBtnsList(gameProperty) {
    return gameProperty.length
        ?
        gameProperty.map(e => {
            return { ...e, img: createImgUrl(`/src/assets/img/${e.img}.jpg`) };
        })
        :
        []
}

const haveRestart = computed(() => {
    return game.value.haveRestart;
})

const visibleSceneAndUserPanel = computed(() => {
    return game.value.visibleSceneAndUserPanel;
})

const sceneElements = computed(() => {
    return game.value.sceneElements;
})

const bg = computed(() => {
    return createImgUrl(`/src/assets/img/bgs/${game.value.currentUserBg}.jpg`);
})

const heroImg = computed(() => {
    return createImgUrl(
        `/src/assets/img/characters/races/${game.value.currentUserImg}.jpg`
    );
})

const heroActions = computed(() => {
    return formedBtnsList(game.value.currentUserActions);
})

const menu = computed(() => {
    return formedBtnsList(game.value.menuBtns);
})

watch(haveRestart, async (val) => {
    if (val) {
        newGame();
    }
})

newGame();
</script>

<template>
    <div class="main">
        <div class="scene">
            <div class="scene__element icon-border" v-for="(element, i) in sceneElements" :key="i">
                {{ element.name }}
            </div>
        </div>
    </div>

    <div class="bottom">
        <div class="bottom_left">
            <div class="hero">
                <div class="icon">
                    <img alt="hero-icon" class="icon-border" :src="heroImg" @click="game.nextHero">
                </div>
                <div class="heath">
                    <svg class="heath__svg" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000"
                        enable-background="new 0 0 1000 1000" xml:space="preserve">
                        <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                        <g>
                            <path
                                d="M10,326.1c0,316.1,490,600.6,490,600.6s490-284.5,490-600.6c0-131-94.8-252.9-237.1-252.9c-131,0-252.9,90.3-252.9,221.3c0-131-121.9-221.3-252.9-221.3C104.8,73.2,10,195.2,10,326.1z" />
                        </g>
                    </svg>
                    <div class="heath__text">10/10</div>
                </div>
                <div class="force">
                    <svg class="force__svg" width="30px" height="30px" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12,10h7L8,22l3-9H5L13,2Z" />
                    </svg>
                    <div class="force__text">10/10</div>
                </div>
            </div>
            <div class="actions">
                <div class="action" v-for="(action, i) in heroActions" :key="i">
                    <img alt="icon " class="icon-border" :src="action.img">
                </div>
            </div>
        </div>
        <div class="bottom_rigth">
            <img class="menu__punct icon-border" :src="punct.img" v-for="(punct, i) in menu" @click="punct.action" :key="i">
        </div>
    </div>
</template>
