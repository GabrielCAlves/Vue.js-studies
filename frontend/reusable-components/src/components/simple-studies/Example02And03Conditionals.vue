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
</style>
