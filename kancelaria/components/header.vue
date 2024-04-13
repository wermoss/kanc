<template>
    <div class="w-full flex items-center justify-center absolute py-8">
        <div class="max-w-screen-2xl w-full">
                <div class="container mx-auto text-white flex justify-between tracking-widest px-8">
                    <div class="">    <img src="/src/logo.svg" alt="Opis obrazka" /></div>
                    <div :class="windowWidth <= 768 ? '' : 'hidden'"><Menu /></div>
                    <div :class="windowWidth > 768 ? '' : 'hidden'">
                        <ul class="flex gap-6">
                            <li @mouseover="dimLinks" @mouseout="resetLinks">
                                Home
                            </li>
                            <li @mouseover="dimLinks" @mouseout="resetLinks">
                                Kancelaria
                            </li>
                            <li @mouseover="dimLinks" @mouseout="resetLinks">
                                Zakres usług
                            </li>
                            <li @mouseover="dimLinks" @mouseout="resetLinks">
                                Blog
                            </li>
                            <li @mouseover="dimLinks" @mouseout="resetLinks">
                                Kontakt
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import anime from 'animejs'

let windowWidth = ref(0)

onMounted(() => {
  windowWidth.value = window.innerWidth
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})

const onResize = () => {
  windowWidth.value = window.innerWidth
}

const dimLinks = (event) => {
  anime({
    targets: 'li',
    opacity: [{ value: 0.5, duration: 300 }],
    easing: 'easeInOutQuad',
  })
  anime({
    targets: event.target,
    opacity: [{ value: 1, duration: 300 }],
    easing: 'easeInOutQuad',
  })
}

const resetLinks = () => {
  anime({
    targets: 'li',
    opacity: [{ value: 1, duration: 300 }],
    easing: 'easeInOutQuad',
  })
}
</script>