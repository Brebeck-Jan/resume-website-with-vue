<script setup lang="ts">

import {RouterLink} from "vue-router";
import {ref} from "vue"

const showMenu = ref(false)

const menuHandler = () => {
  showMenu.value = !showMenu.value;
}

</script>

<template>
  <div class="sidebar">
    <input @click="menuHandler" type="checkbox" class="burgerInput"/>
    <span class="burger upper"></span>
    <span class="burger"></span>
    <span class="burger lower"></span>
    <TransitionGroup>
      <ul v-if="showMenu" id="menu">
        <li>
          <RouterLink to="/">Startseite</RouterLink>
        </li>
        <li>
          <RouterLink to="/cv">Lebenslauf</RouterLink>
        </li>
        <li>
          <RouterLink to="/legal">Impressum</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact">Kontakt</RouterLink>
        </li>
      </ul>
    </TransitionGroup>
  </div>
</template>

<style scoped>
#menu.v-enter-active,
#menu.v-leave-active {
  transition: opacity 1s ease;
}

#menu.v-enter-from,
#menu.v-leave-to {
  opacity: 0;
}

.sidebar {
  position: relative;
  padding: 2%;
  z-index: 1;
  min-width: 30%;
  /*
  outline-color: yellow;
  outline-style: solid;
  */
}

.burgerInput {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;

  cursor: pointer;

  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
}

.burger {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: black;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
  background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
  opacity 0.55s ease;
}

.burger:first-child {
  transform-origin: 0% 0%;
}

.burger:nth-last-child(2) {
  transform-origin: 0% 100%;
}

input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}
</style>