<template>
  <div class="">
    <h2>{{ text }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

let text = ref("Texto não alterado do Lifecycle.");

// ===== Lifecycle Hooks =====
onMounted(() => {
  setTimeout(() => {
    text.value = "Alteração de texto após 3 segundos!";
  }, 3000);
});

onBeforeUnmount(() => {
  console.log("Componente será desmontado");
});
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
h2 {
  margin: 0;
  padding: 0.9rem 1rem;
  border-left: 4px solid #c62828;
  border-radius: 0.5rem;
  background: #fff4f3;
  color: #7f1d26;
  font-size: 1.1rem;
  line-height: 1.5;
}
</style>
