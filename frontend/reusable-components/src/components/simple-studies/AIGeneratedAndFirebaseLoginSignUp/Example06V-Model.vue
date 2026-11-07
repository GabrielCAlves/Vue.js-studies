<template>
  <div>
    <input type="text" v-model="text" placeholder="Comment Somenthing" />
    <p>{{ text }}</p>
    <p>Character count: {{ text.length }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let text = ref("");
</script>

<style scoped>
/* ===== Estilos Base (Mobile First) ===== */
/*
. {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}
*/

/* ===== Tablet (>= 768px) ===== */
/*
@media (min-width: 768px) {
  . {
    padding: 1.5rem;
  }
}
*/

/* ===== Desktop (>= 1024px) ===== */
/*
@media (min-width: 1024px) {
  . {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
}
*/

/* ===== Telas Grandes (>= 1440px) ===== */
/*
@media (min-width: 1440px) {
  . {
    max-width: 1400px;
  }
}
*/
div {
  display: grid;
  gap: 0.7rem;
  color: #3b3030;
}

input {
  box-sizing: border-box;
  width: min(100%, 24rem);
  min-height: 2.8rem;
  padding: 0.65rem 0.8rem;
  border: 1px solid #e4caca;
  border-radius: 0.55rem;
}

input:focus {
  border-color: #c62828;
  outline: 3px solid rgba(198, 40, 40, 0.15);
}

p {
  margin: 0;
}

p:last-child {
  color: #a61f24;
  font-size: 0.85rem;
  font-weight: 700;
}
</style>
