<template>
  <nav
    :class="[
      'p-4 fixed top-0 w-full z-10 h-[57px] flex items-center',
      isDarkMode
        ? 'bg-gray-800 text-white'
        : 'bg-[#F4F6F8] text-slate-900 shadow-sm',
    ]"
  >
    <div :class="['logo', isDarkMode ? 'text-white' : 'text-gray-900']">
      <img
        :src="isDarkMode ? whiteLogo : blackLogo"
        alt="Logo"
        class="h-8 w-8"
      />
    </div>
    <ul class="flex-grow"></ul>
    <!-- Show text when sidebar is hidden -->
    <span v-if="!isSidebarVisible" class="ml-4"> Your Text Here </span>
    <!-- Dark Mode Toggle Button -->
    <button
      @click.prevent="toggleDarkMode"
      aria-label="Toggle dark mode"
      class="fixed right-4 top-2 p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 z-50 transition-colors duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600"
    >
      <span v-if="isDarkMode">🌙 Dark</span>
      <span v-else>☀️ Light</span>
    </button>
  </nav>
</template>

<script>
import { ref, onMounted } from 'vue'
import whiteLogo from '../assets/icons/logos.svg' // White logo
import blackLogo from '../assets/icons/logo-dark.svg' // Black logo

export default {
  setup() {
    const isDarkMode = ref(false)
    const isSidebarVisible = ref(true) // Initial sidebar state

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value
      document.documentElement.classList.toggle('dark', isDarkMode.value)
      localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
    }

    const toggleSidebar = () => {
      isSidebarVisible.value = !isSidebarVisible.value
    }

    onMounted(() => {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme === 'dark') {
        isDarkMode.value = true
        document.documentElement.classList.add('dark')
      }
    })

    return {
      isDarkMode,
      toggleDarkMode,
      whiteLogo,
      blackLogo,
      isSidebarVisible,
      toggleSidebar,
    }
  },
}
</script>

<style scoped>
/* Optional: Custom styles can be added here */
button:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

/* Custom shadow for bottom only without left shadow */
.shadow-b {
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); /* Adjusted shadow */
}

/* Example styles for the logo */
.logo {
  transition: color 0.3s ease; /* Smooth color transition */
}
</style>
