<template>
    <div class="outer-div">
      <div id="inner-div1" class="inner-div" style="background-color: #000; z-index: 3;"></div>
      <div id="inner-div2" class="inner-div" style="background-color: green; z-index: 1;"></div>
      <div id="inner-div3" class="inner-div" style="background-color: blue; z-index: 2;"></div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import anime from 'animejs'
  
  onMounted(() => {
    anime({
      targets: '#inner-div2',
      scale: [0.1, 1],
      opacity: [1, 0],
      easing: 'easeInOutQuad',
      duration: 2000,
      delay: 1000,
      loop: true
    })
  })
  </script>
  
  <style>
  .outer-div {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .inner-div {
    width: 50%;
    height: 50%;
    position: absolute;
    border-radius: 100%;
  }
  
  #inner-div2 {
    opacity: 0;
  }
  </style>