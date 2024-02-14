<script>
export default {
  name: "Footer"
}
</script>

<template>
  <footer class="mt-10 md:mt-28 py-4">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="ml-14">
        <img src="/log.svg" alt="logo">
      </div>
      <nav class="text-center text-white md:text-left">
        <ul class="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-28 mr-0 md:mr-36">
          <li class="footerS">О НАС</li>
          <li class="footerS">ЗАВТРАКИ</li>
          <li class="footerS">ТРЕНИНГИ</li>
          <li class="footerS">КУРСЫ</li>
        </ul>
      </nav>
      <div class="hidden md:flex space-x-2">
        <div class="w-2 h-2 rounded-full bg-black"></div>
        <div class="w-2 h-2 rounded-full bg-black"></div>
        <div class="w-2 h-2 rounded-full bg-black"></div>
        <div class="w-2 h-2 rounded-full bg-black"></div>
      </div>
    </div>
    <div class="relative bg-black text-white pt-10 md:pt-28">
      <div class="absolute inset-x-0 bottom-0 h-0.5" style="background-color: #1a202c; width: 85%; left: 7%;"></div>
    </div>
    <div class="mt-6 flex text-white justify-center items-center">©2024</div>
  </footer>
</template>

<style scoped>

</style>