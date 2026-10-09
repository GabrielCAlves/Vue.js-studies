<template>
  <div class="">
    <h1>Requisitions</h1>
    <table>
      <tr v-for="v in vector" :key="v.id">
        <td>{{ v.userId }}</td>
        <td>{{ v.id }}</td>
        <td>{{ v.title }}</td>
        <td>{{ v.body }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

let vector = ref<{ userId: number; id: number; title: string; body: string }[]>(
  [],
);

onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((returned) => returned.json())
    .then((returned) => (vector.value = returned));
});
</script>
