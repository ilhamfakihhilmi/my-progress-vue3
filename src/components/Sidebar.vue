<template>
  <div
    :class="[isSidebarVisible ? 'w-64' : 'w-16', 'shadow-sm']"
    class="text-gray-800 dark:text-white dark:bg-gray-800 bg-[#F4F6F8] flex flex-col transition-all duration-500 ease-in-out"
  >
    <!-- Sidebar Header -->
    <div
      class="p-5 dark:bg-gray-800 bg-[#F4F6F8] text-lg font-semibold flex items-center h-14 gap-5"
    >
      <button @click="toggleSidebar" class="text-slate-800 dark:text-white">
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
      <p v-if="isSidebarVisible">E-Learning</p>
    </div>

    <!-- Sidebar Menu -->
    <ul class="p-4 flex-1">
      <!-- Menu 1 -->
      <li class="mb-4" :class="{ 'w-max': !isSidebarVisible }">
        <a
          href="#"
          class="flex items-center p-2 rounded-lg transition-colors duration-300"
          :class="{
            'bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600':
              $route.path === '/' || isSubmenuVisible.menu1,
            'hover:bg-white dark:hover:bg-gray-600':
              $route.path !== '/' && !isSubmenuVisible.menu1,
          }"
          @click.prevent="toggleSubmenu('menu1')"
        >
          <img :src="menu1Icon" alt="Menu 1" class="h-5 w-5" />
          <span v-if="isSidebarVisible" class="px-3">Vue 3</span>
          <div class="ml-auto">
            <img
              :src="dropdownIcon"
              alt="Toggle Submenu"
              class="h-4 w-4 transform transition-transform duration-300"
              :class="isSubmenuVisible.menu1 ? 'rotate-180' : 'rotate-0'"
              v-if="isSidebarVisible"
            />
          </div>
        </a>
        <transition name="fade" mode="out-in">
          <ul
            v-show="isSubmenuVisible.menu1"
            class="pl-4 mt-2 relative submenu"
          >
            <li class="mb-2 relative">
              <router-link
                to="/submenu-1-1"
                class="flex items-center space-x-2 p-2 rounded-lg transition-colors duration-300"
                :class="{
                  'bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600':
                    $route.path === '/submenu-1-1',
                  'hover:bg-white dark:hover:bg-gray-600':
                    $route.path !== '/submenu-1-1',
                }"
              >
                <span v-if="isSidebarVisible" class="circle"></span>
                <span v-if="isSidebarVisible">Pengenalan Vue</span>
              </router-link>
            </li>
            <li class="mb-2 relative">
              <router-link
                to="/submenu-1-2"
                class="flex items-center space-x-2 p-2 rounded-lg transition-colors duration-300"
                :class="{
                  'bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600':
                    $route.path === '/submenu-1-2',
                  'hover:bg-white dark:hover:bg-gray-600':
                    $route.path !== '/submenu-1-2',
                }"
              >
                <span v-if="isSidebarVisible" class="circle"></span>
                <span v-if="isSidebarVisible">Submenu 1.2</span>
              </router-link>
            </li>
          </ul>
        </transition>
      </li>
      <!-- Menu 2 -->
      <li class="mb-4" :class="{ 'w-max': !isSidebarVisible }">
        <a
          href="#"
          class="flex items-center p-2 rounded-lg transition-colors duration-300"
          :class="{
            'bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600':
              $route.path === '/' || isSubmenuVisible.menu2,
            'hover:bg-white dark:hover:bg-gray-600':
              $route.path !== '/' && !isSubmenuVisible.menu2,
          }"
          @click.prevent="toggleSubmenu('menu2')"
        >
          <img :src="menu2Icon" alt="Menu 2" class="h-5 w-5" />
          <span v-if="isSidebarVisible" class="px-3">My Project</span>
          <div class="ml-auto">
            <img
              :src="dropdownIcon"
              alt="Toggle Submenu"
              class="h-4 w-4 transform transition-transform duration-300"
              :class="isSubmenuVisible.menu2 ? 'rotate-180' : 'rotate-0'"
              v-if="isSidebarVisible"
            />
          </div>
        </a>
        <transition name="fade" mode="out-in">
          <ul
            v-show="isSubmenuVisible.menu2"
            class="pl-4 mt-2 relative submenu"
          >
            <li class="mb-2 relative">
              <router-link
                to="/submenuproject-1-2"
                class="flex items-center space-x-2 p-2 rounded-lg transition-colors duration-300"
                :class="{
                  'bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600':
                    $route.path === '/submenuproject-1-2',
                  'hover:bg-white dark:hover:bg-gray-600':
                    $route.path !== '/submenuproject-1-2',
                }"
              >
                <span v-if="isSidebarVisible" class="circle"></span>
                <span v-if="isSidebarVisible">Project 1</span>
              </router-link>
            </li>
            <li class="mb-2 relative">
              <router-link
                to="/submenuproject-2-2"
                class="flex items-center space-x-2 p-2 rounded-lg transition-colors duration-300"
                :class="{
                  'bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600':
                    $route.path === '/submenuproject-2-2',
                  'hover:bg-white dark:hover:bg-gray-600':
                    $route.path !== '/submenuproject-2-2',
                }"
              >
                <span v-if="isSidebarVisible" class="circle"></span>
                <span v-if="isSidebarVisible">Project 2</span>
              </router-link>
            </li>
          </ul>
        </transition>
      </li>
      <!-- Menu 3 -->
      <li class="mb-4" :class="{ 'w-max': !isSidebarVisible }">
        <router-link
          to="/menu3"
          class="flex items-center space-x-2 p-2 rounded-lg transition-colors duration-300"
          :class="{
            'bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600':
              $route.path === '/menu3',
            'hover:bg-white dark:hover:bg-gray-600': $route.path !== '/menu3',
          }"
        >
          <img :src="menu3Icon" alt="Menu 3" class="h-5 w-5" />
          <span v-if="isSidebarVisible" class="px-2">Notes</span>
        </router-link>
      </li>
    </ul>

    <!-- Logout Button -->
    <div class="mt-auto p-4">
      <a
        href="#"
        class="flex items-center space-x-2 text-red-400 hover:text-red-600 p-2 rounded-lg transition-colors duration-300"
        :class="{
          'bg-gray-200 dark:bg-gray-700': $route.path === '/logout',
          'hover:bg-gray-100 dark:hover:bg-gray-600': $route.path !== '/logout',
        }"
      >
        <img :src="logoutIcon" alt="Logout" class="h-5 w-5" />
        <span v-if="isSidebarVisible">Logout</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import menu1Icon from '../assets/icons/vue-logo.svg'
import menu2Icon from '../assets/icons/project.svg'
import menu3Icon from '../assets/icons/notepad.svg'
import logoutIcon from '../assets/icons/logout.svg'
import dropdownIcon from '../assets/icons/dropdown-icon.svg'

// State Variables
const isSidebarVisible = ref(true)
const isSubmenuVisible = ref({
  menu1: false,
  menu2: false,
})

const isDarkMode = ref(false)

// Methods
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value
}

const toggleSubmenu = menu => {
  // Close other submenus when one is opened
  if (menu === 'menu1') {
    isSubmenuVisible.value.menu2 = false // Close menu 2
  } else if (menu === 'menu2') {
    isSubmenuVisible.value.menu1 = false // Close menu 1
  }

  // Toggle the selected submenu
  isSubmenuVisible.value[menu] = !isSubmenuVisible.value[menu]
}

// Watcher to hide dropdowns when the sidebar is hidden
watch(isSidebarVisible, newValue => {
  if (!newValue) {
    isSubmenuVisible.value.menu1 = false // Hide submenu for menu1
    isSubmenuVisible.value.menu2 = false // Hide submenu for menu2
  }
})

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light') // Save theme to local storage
}

// On Mounted
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDarkMode.value = savedTheme === 'dark'
  document.documentElement.classList.toggle('dark', isDarkMode.value)
})
</script>

<style scoped>
.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgb(184, 184, 184); /* Tailwind's indigo-600 */
}

.submenu {
  background-color: none; /* Tailwind's gray-100 */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
