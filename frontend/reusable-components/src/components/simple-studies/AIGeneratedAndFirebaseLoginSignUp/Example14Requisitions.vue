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

<style scoped>
div {
  min-width: 0;
}

h1 {
  margin: 0 0 0.9rem;
  color: #7f1d26;
  font-size: 1.1rem;
}

table {
  display: block;
  max-width: 100%;
  overflow: auto;
  border: 1px solid #f0dddd;
  border-radius: 0.6rem;
  border-collapse: separate;
  border-spacing: 0;
  color: #493737;
  font-size: 0.88rem;
}

tr:nth-child(even) {
  background: #fff5f4;
}

td {
  min-width: 3rem;
  padding: 0.65rem 0.75rem;
  border-bottom: 1px solid #f3e5e4;
}

td:nth-child(3) {
  min-width: 10rem;
  color: #8d222b;
  font-weight: 700;
}

td:last-child {
  min-width: 16rem;
}
</style>
