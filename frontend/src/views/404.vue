<template>
  <div class="page">
    <header class="header">
    </header>
    <div class="content">
      <div class="container mx-auto flex flex-col justify-center items-center h-screen">
        <img src="/public/404.png" alt="404" class="w-96 h-54 mb-4">
        <p class="text-center text-white font-sans" style="font-size: 44px;">Страница не найдена</p>
        <p class="text-center text-gray-500 font-extralight" style="font-size: 18px;">
          возможно, запрошенная страница <br> временно не доступна или удалена
        </p>
        <button class="mt-4" :style="buttonStyle">На главную</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const buttonStyle = `
  background-color: #81E7EBCC;
  color: black;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 2px solid #81E7EBCC;
  transition: background-color 0.3s, color 0.3s;
`;

</script>

<style scoped>
.page {
  position: relative;
  min-height: 100vh;
}

.header {
  background-image: linear-gradient(to right, rgba(129, 231, 235, 0.8), transparent, transparent, rgba(129, 231, 235, 0.8));
}

.content {
  position: relative;
  z-index: 1;
}

button:hover {
  background-color: transparent !important;
  color: white !important;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
