<template>
  <div>
    <p>{{ "Hi " + name + " you're " + age + " years old!" }}</p>
    <p>{{ number1 + number2 }}</p>
  </div>
</template>

<script setup lang="ts">
let name = "Gabriel";
let age = 25;
let number1 = 25;
let number2 = 24;
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
}

p {
  margin: 0.35rem 0;
}

p:last-child {
  color: #b4232d;
  font-weight: 800;
}
</style>
