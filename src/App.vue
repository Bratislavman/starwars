<script setup lang="ts">
import { computed } from 'vue'
import { ref, onMounted } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

const sceneElements = computed(() => {
    return [
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
    ]
})

const heroImg = computed(() => {
    const image = '';
    return ''
    //return require(`@/assets/path/to/image/${image}`);
})

const heroActions = computed(() => {

    const i =  count.value ? `/src/assets/img/tap.png` : `/src/assets/img/item.png`;

    return [
        { name: 'Действие', img: new URL(i, import.meta.url).href },
        // { name: 'Действие', img: require(`@/img/tap.png`) },
        // { name: 'Сила', img: require(`@/img/force.png`)  },
        // { name: 'Предмет', img: require(`@/img/item.png/`)  },
        // { name: 'Обмен вещами', img: require(`@/img/trade.png`)  },
    ]
})

const menu = computed(() => {
    return [
        // { name: 'Новая игра', img: require(`@/img/new.png`)  },
        // { name: 'Загрузка и сохранение', img: require(`@/img/save.png`)  },
        // { name: 'Выбор языка', img: require(`@/img/languages.png`)  },
    ]
})
</script>

<template>
    <div class="main">
        <div class="scene">
            <div class="scene__element" v-for="element in sceneElements">
                {{ element.name }}
            </div>
        </div>
    </div>
    
    <div class="bottom">
        <div class="bottom_left">
            <div class="hero">
                <div class="icon">
                    <img alt="hero-icon" :src="heroImg">
                </div>
                <div class="heath">
                    <svg class="heath__svg" fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 471.701 471.701" xml:space="preserve">
                                    <g>
                                    	<path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                                    		c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                                    		l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                                    		C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                                    		s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                                    		c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                                    		C444.801,187.101,434.001,213.101,414.401,232.701z"/>
                                    </g>
                            </svg>
                    <div class="heath__text">10/10</div>
                </div>
                <div class="force">
                    <svg class="force__svg" fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,10h7L8,22l3-9H5L13,2Z"/></svg>
                    <div class="force__text">10/10</div>
                </div>
            </div>
            <div class="actions">
                <div class="action" v-for="action in heroActions">
                    <img alt="force" :src="action.img">
                </div>
            </div>
        </div>
        <div class="menu">
            <img alt="menu__punct" :src="punct" v-for="punct in menu">
        </div>
        <img alt="menu__punct1" src="@/assets/img/tap.png" @click="increment">
    </div>
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }
    .logo {
        margin: 0 2rem 0 0;
    }
    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;
        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
