<template>
  <div>
    <div class="hamburger hamburger--elastic" @click="toggleMenu" :class="{ 'is-active': menuOpen }">
      <div class="hamburger-box">
        <div class="hamburger-inner"></div>
      </div>
    </div>
    <div class="fixed top-0 left-0 w-64 h-full bg-gray-800 transform -translate-x-full transition-transform duration-300 ease-in-out z-30" :class="{ 'translate-x-0': menuOpen }">
      <ul ref="menuItems" class="p-8">
        <li class="py-2">Home</li>
        <li class="py-2">Kancelaria</li>
        <li class="py-2">Blog</li>
        <li class="py-2">Kontakt</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import anime from 'animejs'

let menuOpen = ref(false)
let menuItems = ref(null)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  if (menuOpen.value) {
    nextTick(() => {
      anime({
        targets: menuItems.value.children,
        opacity: [0, 1],
        translateX: [-100, 0], // Przesunięcie wzdłuż osi X
        delay: anime.stagger(200), // Opóźnienie zależne od indeksu
        easing: 'easeOutQuad',
      })
    })
  }
}

onMounted(() => {
  anime.set(menuItems.value.children, { opacity: 0 })
})
</script>

<style scoped>
.hamburger {
  padding: 0px 0px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}
.hamburger:hover {
  opacity: 0.7;
}
.hamburger.is-active:hover {
  opacity: 0.7;
}
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #fff;
}

.hamburger-box {
  width: 30px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: 2px;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 30px;
  height: 2px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}
.hamburger-inner::before {
  top: -10px;
}
.hamburger-inner::after {
  bottom: -10px;
}

.hamburger--elastic .hamburger-inner {
  top: 2px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.hamburger--elastic .hamburger-inner::before {
  top: 10px;
  transition: opacity 0.125s 0.275s ease;
}
.hamburger--elastic .hamburger-inner::after {
  top: 20px;
  transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.hamburger--elastic.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(135deg);
  transition-delay: 0.075s;
}
.hamburger--elastic.is-active .hamburger-inner::before {
  transition-delay: 0s;
  opacity: 0;
}
.hamburger--elastic.is-active .hamburger-inner::after {
  transform: translate3d(0, -20px, 0) rotate(-270deg);
  transition-delay: 0.075s;
}

</style>