<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';

</script>


<template>
  <div class="container flex flex-col max-w-screen-xl min-h-screen mx-auto   ">
    <Header/>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto">
      <div class="relative z-10">
        <img src="/trening1.png" alt="Training" class="w-full h-auto md:ml-14 md:w-10/12 lg:w-62 xl:w-68 2xl:w-144" style="max-width: 100%;">
      </div>
      <div class="relative z-10 md:mt-4">
        <p class="text-white font-bold text-4xl md:text-5xl md:leading-snug md:mb-8">Тренинг по развитию <br> Soft-skills</p>
        <p class="text-gray-400 mb-8 md:mb-12">Результат любой работы зависит не только от квалификации, но и от <br> личных качеств человека, который ее делает. Стрессоустойчивость,<br> умение управлять своим временем, умение общаться, выступать<br> публично, убеждать в своей правоте, мотивировать и вдохновлять –<br> эти качества помогут Вам сделать вашу работу лучше, быстрее и<br> качественнее!</p>
        <hr class="mb-8 md:mb-12">

        <button class="rounded-full bg-red-700 text-black font-bold py-4 px-8 border-2 border-red-700">Записаться на тренинг</button>
      </div>
    </div>
    <Footer/>
  </div>

</template>

<style scoped>
button {
  background-color: #81E7EBCC;
  border-color: #81E7EBCC;
  transform: translateY(36px);
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: transparent;
  color: white;
}

@media (min-width: 768px) {
  .md\:ml-14 {
    margin-left: 3.5rem; /* Adjust as needed */
  }
}
</style>
