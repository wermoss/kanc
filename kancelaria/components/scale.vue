<template>
    <div @click="closeModal" class="fixed bottom-20 right-20">
      <div ref="animatedDiv1" class="absolute bg-black h-16 w-16 rounded-full"></div>
      <div ref="animatedDiv2" class="absolute bg-black h-16 w-16 rounded-full"></div>
      <div class="absolute bg-black h-16 w-16 p-5 rounded-full flex items-center justify-center">
            <img src="/src/phone.svg" alt="Phone" class="w-full h-full object-contain"/>
        </div>    
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import anime from 'animejs'
  
  const animatedDiv1 = ref(null)
  const animatedDiv2 = ref(null)
  const initialOpacityDiv1 = ref(0.2) // Zmieniamy tę linię
  const initialOpacityDiv2 = ref(0.2) // Zmieniamy tę linię
  
  onMounted(() => {
    const animateDiv1 = () => {
      animatedDiv1.value.style.opacity = initialOpacityDiv1.value
      animatedDiv1.value.style.transform = 'scale(1)'
  
      anime({
        targets: animatedDiv1.value,
        scale: 2,
        opacity: 0,
        duration: 3000,
        easing: 'easeInOutQuad',
        complete: animateDiv1,
        delay: 2000
      })
    }
  
    const animateDiv2 = () => {
      animatedDiv2.value.style.opacity = initialOpacityDiv2.value
      animatedDiv2.value.style.transform = 'scale(1)'
  
      anime({
        targets: animatedDiv2.value,
        scale: 2,
        opacity: 0,
        duration: 2000,
        easing: 'easeInOutQuad',
        complete: animateDiv2,
        delay: 3000
      })
    }
  
    animateDiv1()
    animateDiv2()
  })
  </script>