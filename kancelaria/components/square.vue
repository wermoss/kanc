<template>
  <div id="animated-square"></div>
</template>

<script>
import anime from 'animejs'

export default {
  mounted() {
    anime({
      targets: '#animated-square',
      width: ['100px', '400px'], // zmienia kwadrat w prostokąt
      duration: 1000, // czas trwania animacji w milisekundach
      easing: 'easeInOutSine', // typ easingu
    })

    setTimeout(() => {
      anime({
        targets: '#animated-square',
        width: ['400px', '0px'], // zmniejsza prostokąt do zera
        translateX: ['0px', '400px'], // przesuwa element w prawo
        duration: 1000, // czas trwania animacji w milisekundach
        easing: 'easeInOutSine', // typ easingu
      })
    }, 1000)
  },
}
</script>

<style>
#animated-square {
  background-color: #f00;
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0;
}
</style>