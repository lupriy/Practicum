<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';

</script>

<template>
  <body>
  <div class="container flex flex-col max-w-screen-xl min-h-screen mx-auto">
    <header>
      <nav class="w-full z-20 top-0 start-0">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/log.svg">

          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-6 py-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Войти
            </button>
            <button data-collapse-toggle="navbar-sticky" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 text-white"
               id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="#" class="block py-2 px-3  rounded md:bg-transparent headerS  md:p-0 ">О
                  ПРАКТИКУМ</a>
              </li>
              <li>
                <a href="#"
                   class="block py-2 px-3  rounded  md:hover:bg-transparent headerS  md:p-0  dark:text-white   md:dark:hover:bg-transparent ">МЕРОПРИЯТИЯ</a>
              </li>
              <li>
                <a href="#"
                   class="block py-2 px-3  rounded  md:hover:bg-transparent  md:p-0 headerS  dark:text-white   md:dark:hover:bg-transparent ">КУРСЫ</a>
              </li>
              <li>
                <a href="#"
                   class="block py-2 px-3  rounded md:hover:bg-transparent headerS md:p-0 md:dark:hover:bg-transparent">КОМПАНИЯМ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <section>
        <h1 class="text-white">PPPPPP</h1>
      </section>
    </main>


    <footer class="mt-auto">
      <div class="p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/log.svg"/>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
            <li>
              <a href="#" class="footerS me-4 md:me-6">О НАС</a>
            </li>
            <li>
              <a href="#" class="footerS me-4 md:me-6">ЗАВТРАКИ</a>
            </li>
            <li>
              <a href="#" class="footerS me-4 md:me-6">ТРЕНИНГИ</a>
            </li>
            <li>
              <a href="#" class="footerS">КУРСЫ</a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-white">© 2024 Все права защищены.</span>
      </div>
    </footer>


  </div>
  </body>
</template>

<style scoped>

</style>
