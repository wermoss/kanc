<template>
  <div class="container relative">
    <div class="text absolute z-10 opacity-0" ref="text">Kancelaria</div>
    <div id="animated-square" class="absolute left-0 z-20" ref="square"></div>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  mounted() {
    this.$nextTick(() => {
      const textWidth = this.$refs.text.offsetWidth
      this.$refs.square.style.width = `${textWidth}px`

      anime({
        targets: this.$refs.square,
        width: ['0px', `${textWidth}px`],
        duration: 500,
        easing: 'cubicBezier(.47,.01,.99,.3)',
      })

      setTimeout(() => {
        anime({
          targets: this.$refs.square,
          width: [`${textWidth}px`, '0px'],
          translateX: ['0px', `${textWidth}px`],
          duration: 500,
          easing: 'cubicBezier(.47,.01,.99,.3)',
        })
      }, 500)

      anime({
        targets: this.$refs.text,
        opacity: [0, 1],
        delay: 500, // opóźnienie 1 sekundy
        duration: 100,
        easing: 'cubicBezier(.47,.01,.99,.3)',
      })
    })
  },
}
</script>

<style>
#animated-square {
  background-color: #f00;
  height: 100px;
}
</style>