<template>
  <div class="w-full bg-green-100 flex items-center justify-center bg-no-repeat bg-center bg-cover bg-[url('https://res.cloudinary.com/dqoftbaal/image/upload/f_auto,q_auto/lawyer_jlwvcn')]">
    <div class="max-w-screen-2xl w-full">
      <div class="h-screen flex flex-col items-center justify-center text-white">
        <div class="container mx-auto text-xl px-8">
          <div><Subtitle /></div><br><br><br>
          <div><Zombie /></div>
        </div>
      </div>
    </div>
  </div>
  <div class="h-[200px]">Sekcja korzyści</div>
  <Scale v-if="showScale" />
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showScale = ref(false)

onMounted(() => {
  setTimeout(() => {
    showScale.value = true
  }, 5000) // Opóźnienie 5 sekund
})
</script>

<style></style>