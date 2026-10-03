<template>
  <div class="">
    <button @click="clickYes">Yes</button>
    <button @click="clickNo">No</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["yes", "no"]);

function clickYes() {
  emit("yes");
}

function clickNo() {
  emit("no");
}
</script>

<style scoped></style>
