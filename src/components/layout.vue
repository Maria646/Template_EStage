
<template>
  <div class="bg-neutral-100 flex flex-row min-h-screen">

    <div class="flex flex-shrink-0 w-12 sm:w-20 lg:w-48 xl:w-64 bg-gray-800 text-white min-h-screen">
      <Sidebar />
    </div>


    <div class="w-full flex flex-col">

      <div class="bg-neutral-100 z-20 sm:static top-0 left-0 right-0 ">
        <MenuActions />
      </div>


      <main class="pt-6 lg:pt-24 px-4 xl:px-12 max-[400px]:max-w-[350px] mx-auto w-full">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './sidebar.vue';
import MenuActions from './menuActions.vue'
</script>