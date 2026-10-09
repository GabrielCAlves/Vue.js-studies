<template>
  <div class="">
    <h3>
      Name Info coming from Example11Props1 (This is Example12Props2):
      {{ name }}
    </h3>
    <h3>
      Age Info coming from Example11Props1 (This is Example12Props2): {{ age }}
    </h3>
    <h3>
      City Info coming from Example11Props1 (This is Example12Props2):
      {{ city }}
    </h3>
    <h3>
      Cities Info coming from Example11Props1 (This is Example12Props2):
      <ul>
        <li v-for="city1 in cities_Props2" :key="city1">{{ city1 }}</li>
      </ul>
    </h3>
    <button @click="function_Props1">Click Here</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps([
  "name",
  "age",
  "city",
  "cities_Props2",
  "function_Props1",
]);

// ===== Props =====
// const props = defineProps<{
//   title: string
// }>()

// ===== Emits =====
// const emit = defineEmits<{
//   (e: 'update', value: string): void
// }>()
</script>
