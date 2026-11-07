<template>
  <div>
    <h1 v-if="show">Hello World!</h1>
    <h1 v-else>Already shown</h1>
    <button v-on:click="ShowHide">
      <span v-if="show">Hide Message</span>
      <span v-else>Show Message</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let show = ref(true);

function ShowHide() {
  show.value = !show.value;
}
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
  justify-items: start;
  gap: 0.85rem;
}

h1 {
  margin: 0;
  color: #7f1d26;
  font-size: 1.25rem;
}

button {
  min-height: 2.5rem;
  padding: 0.55rem 0.9rem;
  border: 0;
  border-radius: 0.6rem;
  background: #c62828;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
}

button:hover {
  background: #a61f24;
}
</style>
