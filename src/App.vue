<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'



import { ref, onMounted } from 'vue'

import {Unit} from './classess/Unit';
import {OBJ_CLASSES} from './constants/constants';
import { Direction } from './constants/enums';

const x = new OBJ_CLASSES.Unit(1,'11', Direction.Left);

const x2 = new OBJ_CLASSES.Unit(2,'33',  Direction.Up, [x.id]);

console.log(OBJ_CLASSES , 'OBJ_CLASSES ');

const y = {
  x, x2
};

console.log(JSON.stringify(x2))

const xx = JSON.parse(JSON.stringify(x2));

localStorage.setItem('test', JSON.stringify(x2));

const xx2 = new OBJ_CLASSES.Unit(xx.id,xx.name1, xx.direction, xx.unitsIds);
console.log(xx, xx2);
xx2.say()


// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}



// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is`)
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
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
