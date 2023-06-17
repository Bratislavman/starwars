<script setup lang="ts">
import { computed, ref, reactive } from 'vue'
import { Game } from '@/classes/Game';

let game = ref(null);

function newGame() {
    game.value = new Game();
}

function createImgUrl(url) {
    return new URL(url,
        import.meta.url).href;
}

newGame();

const sceneElements = computed(() => {
    return game.value.sceneElements;
})

const bg = computed(() => {
    return createImgUrl(`/src/assets/img/bgs/${game.value.currentUserBg}.jpg`);
})

const heroImg = computed(() => {
    return createImgUrl(`/src/assets/img/characters/races/${game.value.currentUserImg}.jpg`);
})

const heroActions = computed(() => {
    return game.value.currentUserBattleActions.length ? game.value.currentUserBattleActions : [{
            name: 'Действие',
            img: createImgUrl('/src/assets/img/menu/tap.jpg'),
        },
        {
            name: 'Сила',
            img: createImgUrl('/src/assets/img/menu/force.jpg'),
        },
        {
            name: 'Предмет',
            img: createImgUrl('/src/assets/img/menu/item.jpg'),
        },
        // {
        //     name: 'Обмен вещами',
        //     img: new URL('/src/assets/img/menu/trade.jpg',
        //         import.meta.url).href
        // }
    ]
})

const menu = computed(() => {
    return [{
            name: 'Новая игра',
            img: createImgUrl('/src/assets/img/menu/new.jpg'),
            action: newGame,
        },
        // {
        //     name: 'Загрузка и сохранение',
        //     img: new URL('/src/assets/img/menu/save.jpg',
        //         import.meta.url).href
        // },
    ]
})
</script>

<template>
    <div class="main">
        <div class="scene">
            <div class="scene__element icon-border" v-for="element in sceneElements">
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
                    <svg class="heath__svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                                                                                            <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                                                                                            <g><path d="M10,326.1c0,316.1,490,600.6,490,600.6s490-284.5,490-600.6c0-131-94.8-252.9-237.1-252.9c-131,0-252.9,90.3-252.9,221.3c0-131-121.9-221.3-252.9-221.3C104.8,73.2,10,195.2,10,326.1z"/></g>
                                                                                            </svg>
                    <div class="heath__text">10/10</div>
                </div>
                <div class="force">
                    <svg class="force__svg" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,10h7L8,22l3-9H5L13,2Z"/></svg>
                    <div class="force__text">10/10</div>
                </div>
            </div>
            <div class="actions">
                <div class="action" v-for="action in heroActions">
                    <img alt="icon " class="icon-border" :src="action.img">
                </div>
            </div>
        </div>
        <div class="bottom_rigth">
            <img class="menu__punct icon-border" :src="punct.img" v-for="punct in menu" @click="punct.action">
        </div>
    </div>
</template>
