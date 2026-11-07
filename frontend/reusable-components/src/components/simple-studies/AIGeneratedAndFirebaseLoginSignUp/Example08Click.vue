<template>
  <div class="">
    <button @click="AlertMessage">Trigger Alert</button>
  </div>
</template>

<script setup lang="ts">
function AlertMessage() {
  alert("Working with clicks.");
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
  display: flex;
  align-items: center;
}

button {
  min-height: 2.6rem;
  padding: 0.6rem 1rem;
  border: 0;
  border-radius: 0.6rem;
  background: #c62828;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  transition: background 160ms ease, transform 160ms ease;
}

button:hover {
  transform: translateY(-1px);
  background: #a61f24;
}
</style>
