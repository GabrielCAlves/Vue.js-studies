<template>
  <div class="">
    <p>Are you happy?</p>
    <Example16EmitChild @yes="onAnswerYes" @no="onAnswerNo" />
    <p style="font-size: 50px">
      {{ isHappy ? "Yes, I am happy!" : "No, I am not happy." }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import * as Example16EmitChild from "./Example16EmitChild.vue";

let isHappy = ref(true);

function onAnswerNo() {
  isHappy.value = false;
}

function onAnswerYes() {
  isHappy.value = true;
}
</script>

<style scoped>
div {
  display: grid;
  justify-items: start;
  gap: 0.75rem;
}

div > p:first-child {
  margin: 0;
  color: #7f1d26;
  font-weight: 800;
}

div > p:last-child {
  margin: 0;
  color: #b4232d;
  font-size: clamp(1.5rem, 5vw, 2.25rem) !important;
  font-weight: 800;
  line-height: 1.2;
}
</style>
