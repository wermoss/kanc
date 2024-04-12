<template>
    <div class="container relative">
      <div class="text absolute z-10 opacity-0 p-10 tracking-[1em] uppercase font-bitter" ref="text">Jestesmy z toba</div>
      <div id="animated-square" class="absolute left-0 z-20" ref="square"></div>
    </div>
  </template>
  
  <script>
  import anime from 'animejs'
  
  export default {
    mounted() {
      this.$nextTick(() => {
        const textWidth = this.$refs.text.offsetWidth
        const textHeight = this.$refs.text.offsetHeight
        this.$refs.square.style.width = `${textWidth}px`
        this.$refs.square.style.height = `${textHeight}px`
  
        anime({
          targets: this.$refs.square,
          width: ['0px', `${textWidth}px`],
          duration: 1000,
          easing: 'easeInOutSine',
          delay: 500, // Dodane opóźnienie
        })
  
        setTimeout(() => {
          anime({
            targets: this.$refs.square,
            width: [`${textWidth}px`, '0px'],
            translateX: ['0px', `${textWidth}px`],
            duration: 1000,
            easing: 'easeInOutSine',
            delay: 500, // Dodane opóźnienie
          })
        }, 1500) // Zwiększone opóźnienie dla setTimeout
  
        anime({
          targets: this.$refs.text,
          opacity: [0, 1],
          delay: 1200, // Zwiększone opóźnienie
          duration: 100,
          easing: 'easeInOutSine',
        })
      })
    },
  }
  </script>
  
  <style>
  #animated-square {
    background-color: #fff;
  }
  </style>