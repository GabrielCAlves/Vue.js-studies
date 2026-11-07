<template>
  <div>
    <div v-html="text"></div>
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
let text = '<p style="color:red">Learning about v-html</p>';
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
  color: #3b3030;
  line-height: 1.65;
  overflow-wrap: anywhere;
}

div > div {
  padding: 0.75rem;
  border-left: 3px solid #c62828;
  border-radius: 0.35rem;
  background: #fff4f3;
}

p {
  margin: 0.75rem 0 0;
  color: #765d5d;
  font-size: 0.9rem;
}
</style>
