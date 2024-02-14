<script>
export default {
  name: "Header"
}
</script>


<template>
  <header class="flex justify-between bg-black  pt-4  text-white">
    <div class="ml-14">
      <img src="/log.svg" alt="logo">
    </div>

    <nav>
      <ul class="text-white flex items-center gap-12 mr-36">
        <b>
          <li class="headerS">О ПРАКТИКУМ</li>
        </b>
        <b>
          <li class="headerS">МЕРОПРИЯТИЯ</li>
        </b>
        <b>
          <li class="headerS">КУРСЫ</li>
        </b>
        <b>
          <li class="headerS">КОМПАНИЯМ</li>
        </b>
        <ul>
          <li>
            <button class="py-2 px-8 border-2 rounded-full ">Войти</button>
          </li>
        </ul>
      </ul>
    </nav>
  </header>
</template>


<style scoped>

</style>