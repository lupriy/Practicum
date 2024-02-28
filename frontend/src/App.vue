<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';

</script>

<template>
  <body>
  <div class="container flex flex-col max-w-screen-xl min-h-screen mx-auto">
    <Header/>
    <main>
      <!-- Section 1(vers) -->
      <section>
        <div class="grid grid-cols-2">
          <div class="pt-28">
            <h1 class="font-bold text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[#55EEF4]">Мы
              прокачаем Ваш мозг</h1>
            <p class="text-[#A1A1AA] text-2xl mt-10">Организация деловых эвентов в Сургуте, Тюмени, Нижневартовске и
              Новом Уренгое</p>
            <div class="mt-10">
              <p class="text-white text-lg ">Доверяют 11000+ учеников</p>
              <div class="items-center flex gap-2 mt-1">
                <img src="/Star.svg" alt="star">
                <p class="text-white text-sm">4.6/5</p></div>
            </div>
          </div>
          <div class="relative pt-12">
            <img src="/vers.png" class="absolute z-20">
            <img src="/Ellipse%2087.png" class="absolute z-10 scale-75 -mt-36">
          </div>
        </div>
      </section>
      <!-- Section 2 -->
      <section class="mx-auto max-w-screen-xl pt-60" style="height: 771px; ">
        <div class="grid grid-cols-3 text-white relative text-center text-3xl ">
          <div>
            <img class="z-10 absolute" src="/sect2.png">
            <img class="z-20 relative mt-10 ml-20" src="/sect21.png">
            <div class="mt-14">Более 12000 <br> учеников</div>
          </div>
          <div>
            <img class="z-10 absolute" src="/sect2.png">
            <img class="z-20 relative mt-10 ml-20" src="/sect22.png">
            <div class="mt-14" >Лучшие <br> спикеры</div>
          </div>
          <div>
            <img class="z-10 absolute" src="/sect2.png">
            <img class="z-20 relative mt-10 ml-20" src="/sect23.png">
            <div class="mt-14">Дружное <br> комьюнити</div>
          </div>
        </div>
      </section>
      <!-- Section 3 -->
      <section class="mx-auto" style="height: 532px">
        <div class="relative">
          <div class=" text-gray-300 text-7xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1>12 лет лидерства в</h1>
            <h2 class="mt-2 pl-8">ХМАО и Тюмени</h2>
          </div>
          <img src="/grop.png" alt="logg " class="">
        </div>
      </section>

    </main>


    <Footer/>
  </div>
  </body>
</template>

<style scoped>

</style>
