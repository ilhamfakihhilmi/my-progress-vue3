<template>
  <div class="flex h-screen">
    <!-- Import the external sidebar -->
    <Sidebar />
    <div class="w-full">
      <Navbar />
      <!-- Main Content -->
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
</script>

<style scoped>
/* Add custom styles if needed */
</style>
