<template>
  <div>
    <button @click="openModal" class="bg-red-500 text-white px-4 py-2 rounded">Otwórz modal</button>
    <div ref="modalBg" class="fixed inset-0 bg-black bg-opacity-0 flex items-center justify-center" style="display: none;">
      <div ref="modalBox" class="max-w-md bg-white p-10 rounded flex flex-col bottom-0 transform translate-y-full ">
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
import { ref, onMounted, onBeforeUnmount } from 'vue'
import anime from 'animejs'

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

const validateInput = () => {
  phoneNumber.value = phoneNumber.value.replace(/\D/g, '')
}
</script>