<template>
  <div>
    <button @click="openModal" class="bg-red-500 text-white px-4 py-2 rounded">Otwórz modal</button>
    <div ref="modalBg" class="fixed inset-0 bg-black bg-opacity-0 flex items-center justify-center" style="display: none;">
      <div ref="modalBox" class="bg-white p-4 rounded flex h-[300px] bottom-0 transform translate-y-full">
        <h2 class="text-xl mb-4">Modal</h2>
        <button @click="closeModal" class="bg-blue-500 text-white px-4 py-2 rounded">Zamknij</button>
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