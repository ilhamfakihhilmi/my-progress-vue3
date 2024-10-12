<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div
      :class="isSidebarVisible ? 'w-64' : 'w-16'"
      class="bg-gray-800 text-white flex flex-col transition-all duration-300 ease-in-out"
    >
      <!-- Sidebar Header -->
      <div
        class="p-4 bg-gray-900 text-lg font-semibold flex justify-between items-center"
      >
        <h2 v-if="isSidebarVisible">My Sidebar</h2>
        <button @click="toggleSidebar" class="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Sidebar Menu -->
      <ul class="p-4 flex-1">
        <li class="mb-4">
          <a
            href="#"
            class="flex items-center space-x-2"
            @click="toggleSubmenu('menu1')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
              />
            </svg>
            <span v-if="isSidebarVisible">Menu 1</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              v-if="isSidebarVisible"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="isSubmenuVisible.menu1 ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'"
              />
            </svg>
          </a>
          <ul v-show="isSubmenuVisible.menu1" class="pl-4 mt-2">
            <li class="mb-2">
              <a href="#" class="flex items-center space-x-2">
                <span v-if="isSidebarVisible">Submenu 1.1</span>
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="flex items-center space-x-2">
                <span v-if="isSidebarVisible">Submenu 1.2</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="mb-4">
          <a href="#" class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span v-if="isSidebarVisible">Menu 2</span>
          </a>
        </li>
        <li class="mb-4">
          <a href="#" class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span v-if="isSidebarVisible">Menu 3</span>
          </a>
        </li>
      </ul>

      <!-- Logout Button -->
      <div class="mt-auto p-4">
        <a
          href="#"
          class="flex items-center space-x-2 text-red-400 hover:text-red-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12H8m0 0l3-3m-3 3l3 3"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12h18"
            />
          </svg>
          <span v-if="isSidebarVisible">Logout</span>
        </a>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1">
      <!-- Content goes here -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isSidebarVisible = ref(true)
const isSubmenuVisible = ref({ menu1: false })

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value
}

const toggleSubmenu = menu => {
  isSubmenuVisible.value[menu] = !isSubmenuVisible.value[menu]
}
</script>

<style scoped>
/* Add custom styles if needed */
</style>
