<template>
  <div>
    <p :class="validation ? 'ok' : 'failed'">Using the class directive</p>
    <button v-on:click="OnAndOff">
      <span v-if="validation">Turn off validation</span>
      <span v-else>Turn on validation</span>
    </button>
    <br />

    red
    <input
      @click="colorP($event.target.value)"
      type="radio"
      name="color"
      value="red"
      checked
    />
    green
    <input
      @click="colorP($event.target.value)"
      type="radio"
      name="color"
      value="green"
    />
    blue
    <input
      @click="colorP($event.target.value)"
      type="radio"
      name="color"
      value="blue"
    />
    yellow
    <input
      @click="colorP($event.target.value)"
      type="radio"
      name="color"
      value="yellow"
    />

    <p :class="classParagraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed
      reprehenderit placeat quisquam praesentium deleniti nam dolores dolorum
      fugiat similique ex blanditiis, aliquam quo recusandae doloremque
      accusamus libero harum laboriosam!
    </p>

    <br />

    <button @click="verde">Verde</button>
    <button @click="vermelho">Vermelho</button>
    <button @click="borda">Borda</button>
    <button @click="incolor">Incolor</button>

    <p ref="firstParagraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed
      reprehenderit placeat quisquam praesentium deleniti nam dolores dolorum
      fugiat similique ex blanditiis, aliquam quo recusandae doloremque
      accusamus libero harum laboriosam!
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let validation = ref(true);
let classParagraph = ref("red");
let firstParagraph = ref<HTMLElement | null>(null);

function OnAndOff() {
  validation.value = !validation.value;
}

function colorP(cor: string) {
  classParagraph.value = cor;
}

function vermelho() {
  if (firstParagraph.value) {
    firstParagraph.value.style.background = "red";
  }
}
function verde() {
  if (firstParagraph.value) {
    firstParagraph.value.style.background = "green";
  }
}
function borda() {
  if (firstParagraph.value) {
    firstParagraph.value.style.border = "2px solid black";
  }
}
function incolor(this: any) {
  if (firstParagraph.value) {
    firstParagraph.value.removeAttribute("style");
  }
}
</script>

<style scoped>
.ok {
  color: green;
}

.failed {
  color: red;
}

.red {
  background-color: red;
}
.green {
  background-color: green;
}
.blue {
  background-color: blue;
}
.yellow {
  background-color: yellow;
}

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
