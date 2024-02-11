<template>
  <header class="flex justify-between bg-black pt-2">
    <div class="ml-14">
      <img src="/logo.svg" alt="logo">
    </div>
    <ul class="text-white flex items-center gap-12 mr-36">
      <b>
        <li class=" cursor-pointer flex items-center ">О ПРАКТИКУМ</li>
      </b>
      <b>
        <li class=" cursor-pointer">МЕРОПРИЯТИЯ</li>
      </b>
      <b>
        <li class=" cursor-pointer">КУРСЫ</li>
      </b>
      <b>
        <li class="pr-10 cursor-pointer">КОМПАНИЯМ</li>
      </b>
      <li id="btn-reg" class=" cursor-pointer rounded-full  outline-white py-2 px-8 font-semibold">Войти</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>