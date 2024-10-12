<script setup>
import { ref } from 'vue'

// Array of paragraphs
const paragraphs = ref([
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
  'Duis tincidunt, tortor ac aliquam fermentum, purus libero tristique quam, sit amet imperdiet urna neque sit amet libero.',
  'In hac habitasse platea dictumst. Etiam tincidunt nulla vitae nisi scelerisque, eget volutpat velit fermentum.',
  'Nam interdum, magna a tincidunt dignissim, velit tortor consectetur leo, vitae consequat turpis justo ac arcu.',
  'Aliquam erat volutpat. Aenean non dolor sit amet orci gravida laoreet vel et turpis.',
  'Phasellus nec dolor ut elit varius tincidunt ut at eros. Donec a orci condimentum, consequat lectus id, ornare est.',
  'Proin hendrerit lectus id eros fermentum, et tristique erat ultricies. Nullam malesuada venenatis risus.',
  'Sed vestibulum elit non nisi dignissim, a posuere velit interdum. Maecenas efficitur, odio id viverra scelerisque.',
  'Integer suscipit velit nec lectus efficitur, vel vestibulum nulla hendrerit. Proin at velit libero.',
  'Morbi fermentum purus eget justo porta, vitae malesuada magna tincidunt. Nullam non risus libero.',
  'Fusce ac consectetur velit. Nulla condimentum, nunc in scelerisque vestibulum, lectus elit cursus sapien.',
  'Vivamus fermentum odio sit amet magna aliquam, sit amet viverra velit vehicula. Suspendisse potenti.',
  'Vestibulum quis justo in sem hendrerit mollis. Mauris at congue tortor.',
  'Pellentesque at felis at sem vehicula iaculis. Fusce vehicula velit ut turpis dictum venenatis.',
  'Suspendisse potenti. Nunc quis urna eros. Vestibulum vitae nunc purus.',
  'Aenean vitae orci at orci suscipit tincidunt. Mauris ac mauris eros.',
  'Nulla euismod orci in leo aliquam, sit amet ultricies dolor congue. Vivamus tincidunt augue at felis gravida.',
  'Nam ut urna ut risus tincidunt tempor ut non quam. Etiam vitae nisi et eros vehicula tincidunt.',
  'Integer ornare, risus at malesuada tincidunt, lectus velit placerat arcu, vel facilisis justo nisi ac enim.',
  'Donec ullamcorper ex nec tellus dignissim, id consectetur orci iaculis. Cras cursus tellus turpis.',
])
</script>

<template>
  <div>
    <!-- Navbar -->
    <nav class="bg-blue-600 text-white p-4">
      <h1 class="text-xl font-bold">My Navbar</h1>
      <ul class="flex space-x-4">
        <li><a href="#" class="hover:underline">Home</a></li>
        <li><a href="#" class="hover:underline">About</a></li>
        <li><a href="#" class="hover:underline">Contact</a></li>
      </ul>
    </nav>

    <!-- Main content -->
    <div class="p-4">
      <h2 class="text-2xl font-semibold mb-4">This is Home page</h2>
      <div>
        <div v-for="(paragraph, index) in paragraphs" :key="index" class="mb-4">
          <textarea
            v-model="paragraphs[index]"
            rows="3"
            class="w-full border p-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Optional: Custom styles can be added here */
</style>
