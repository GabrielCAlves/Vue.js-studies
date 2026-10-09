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
import Example16EmitChild from "./Example16EmitChild.vue";

let isHappy = ref(true);

function onAnswerNo() {
  isHappy.value = false;
}

function onAnswerYes() {
  isHappy.value = true;
}
</script>

<style scoped></style>
