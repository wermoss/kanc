<template>
  <div>
    <button @click="openModal" class="bg-red-500 text-white px-4 py-2 rounded">Otwórz modal</button>
    <div ref="modalBg" class="fixed inset-0 bg-black bg-opacity-0 flex items-center justify-center" style="display: none;">
      <div ref="modalBox" class="max-w-md bg-white p-4 rounded flex flex-col bottom-0 transform translate-y-full ">
        <button @click="closeModal" class="bg-blue-500 text-white px-4 py-2 rounded">Zamknij</button>
        <h2 class="text-xl mb-4">Podaj numer telefonu a my oddzwonimy do Ciebie w ciągu kilkudziesieciu sekund.</h2>
        
        
<form class="max-w-sm mx-auto">
  <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
  <div class="flex">
    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
      </svg>
    </span>
    <input type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green">
  </div>
</form>


      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import anime from 'animejs'

const showModal = ref(false)
const modalBg = ref(null)
const modalBox = ref(null)

const openModal = () => {
  showModal.value = true
  modalBg.value.style.display = 'flex'
  document.body.classList.add('overflow-hidden')
  anime({
    targets: modalBg.value,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
</script>