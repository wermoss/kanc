<template>
    <div class="fixed bottom-0 right-0">
        <div class="outer-div">
            <div class="inner-div" style="background-color: #000; z-index: 3;"></div>
            <div class="inner-div ping" style="background-color: #000; z-index: 1;"></div>
            <div class="inner-div" style="background-color: blue; z-index: 2;"></div>
        </div>
    </div>
</template>
<!-- https://stackdiary.com/css-animations/ -->

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

.ping {
  opacity: 0; /* Ustawiamy początkową przezroczystość na 0 */
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  animation-delay: 1s; /* Dodajemy opóźnienie 1 sekundy */
  width: 100%;
  height: 100%;
}

@keyframes ping {
  0% {
    transform: scale(0.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>