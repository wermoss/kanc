<template>
    <div>
      <div @click="openModal" class="fixed bottom-20 right-20">
        <div ref="animatedDiv1" class="absolute bg-black h-16 w-16 rounded-full"></div>
        <div ref="animatedDiv2" class="absolute bg-black h-16 w-16 rounded-full"></div>
        <div class="absolute bg-black h-16 w-16 p-5 rounded-full flex items-center justify-center">
          <img src="/src/phone.svg" alt="Phone" class="w-full h-full object-contain"/>
        </div>    
      </div>
      <div ref="modalBg" class="fixed inset-0 bg-black bg-opacity-0 flex items-center justify-center" style="display: none;">
        <div ref="modalBox" class="max-w-md bg-white p-10 mx-6 rounded flex flex-col bottom-0 transform translate-y-full ">
          <div @click="closeModal" class="cursor-pointer justify-end flex">
            <img src="/src/close.svg" alt="Zamknij" class="w-6 h-6" />
          </div>
          <h2 class="text-xl my-6">Podaj numer telefonu a my oddzwonimy do Ciebie w ciągu kilkudziesieciu sekund z bezpłatną konsultacją prawną.</h2>
          <p>Jesteś 2 osobą, która zamawia dzisiaj rozmowę.</p>
          <form class="max-w-sm mx-auto">
            <div class="flex">
              <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-sm dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                +48
              </span>
              <input type="tel" v-model="phoneNumber" @input="validateInput" maxlength="9" pattern="\d{9}" class="rounded-none rounded-e-sm bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="450 066 055">
            </div>
            <button :disabled="phoneNumber.length !== 9" :class="{ 'opacity-50': phoneNumber.length !== 9 }" class="bg-blue-500 text-white px-4 py-2 rounded mt-4">Zamów rozmowę</button>
            <p>Numer telefony będzie przetworzony jednorazowo wyłacznie w celu realizacji połaczenia</p>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import anime from 'animejs'
  
  const animatedDiv1 = ref(null)
  const animatedDiv2 = ref(null)
  const initialOpacityDiv1 = ref(0.2)
  const initialOpacityDiv2 = ref(0.2)
  
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
  
  const showModal = ref(false)
  const modalBg = ref(null)
  const modalBox = ref(null)
  let phoneNumber = ref('')
  
  const openModal = () => {
    showModal.value = true
    modalBg.value.style.display = 'flex'
    document.body.classList.add('overflow-hidden')
    anime({
      targets: modalBg.value,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      duration: 500,
      easing: 'linear'
    })
    anime({
      targets: modalBox.value,
      translateY: ['100vh', '0vh'],
      duration: 1000,
      easing: 'easeOutBounce'
    })
  }
  
  const closeModal = () => {
  anime({
    targets: modalBg.value,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    duration: 500,
    easing: 'linear',
    complete: () => {
      showModal.value = false
      modalBg.value.style.display = 'none'
      document.body.classList.remove('overflow-hidden')
    }
  })
  anime({
    targets: modalBox.value,
    translateY: ['0vh', '100vh'],
    duration: 1000,
    easing: 'easeOutQuart'
  })
}

const validateInput = () => {
  phoneNumber.value = phoneNumber.value.replace(/\D/g, '')
}
</script>
<style>
.button-container {
  width: 64px;
  height: 64px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: black;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}

.button {
  width: 24px;
  height: 24px;
}

.animation {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 0, 128, 0.5);
  border-radius: 50%;
  animation: ping 10s infinite;
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