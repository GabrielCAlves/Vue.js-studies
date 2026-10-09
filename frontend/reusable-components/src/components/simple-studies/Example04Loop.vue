<template>
  <div>
    <ul>
      <li v-for="(name, index) in names" :key="name">
        {{ index }} - {{ name }}
      </li>
    </ul>
    <input type="text" v-model="textTyped" v-on:keyup.enter="AddText" />
    <ul>
      <li
        v-for="(item, index) in array"
        style="background: white"
        @click="alerta($event)"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let names = ["Gabriel", "Kyara", "Raissa", "Rui"];

let textTyped = ref("");
let array = ref<string[]>([]);

function AddText() {
  array.value.push(textTyped.value);
  textTyped.value = "";
}

function alerta(event) {
  if (event.target.style.background == "white")
    event.target.style = "background: red";
  else event.target.style = "background: white";
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
