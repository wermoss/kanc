<template>
  <div>
    <div @click="toggleMenu" class="hamburger">
      <div class="bar bar1"></div>
      <div class="bar bar2"></div>
      <div class="bar bar3"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import anime from 'animejs'

let menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value

  if (menuOpen.value) {
    anime({
      targets: '.bar1',
      rotate: 45,
      translateY: 10,
      width: '40px',
      duration: 500,
      easing: 'easeInOutQuad'
    })
    anime({
      targets: '.bar2',
      opacity: 0,
      duration: 500,
      easing: 'easeInOutQuad'
    })
    anime({
      targets: '.bar3',
      rotate: -45,
      translateY: -10,
      width: '40px',
      duration: 500,
      easing: 'easeInOutQuad'
    })
  } else {
    anime({
      targets: '.bar1',
      rotate: 0,
      translateY: 0,
      width: '35px',
      duration: 500,
      easing: 'easeInOutQuad'
    })
    anime({
      targets: '.bar2',
      opacity: 1,
      duration: 500,
      easing: 'easeInOutQuad'
    })
    anime({
      targets: '.bar3',
      rotate: 0,
      translateY: 0,
      width: '35px',
      duration: 500,
      easing: 'easeInOutQuad'
    })
  }
}
</script>

<style scoped>
.hamburger {
  cursor: pointer;
  width: 35px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bar {
  width: 35px;
  height: 5px;
  background-color: #333;
  transition: 0.4s;
}
</style>