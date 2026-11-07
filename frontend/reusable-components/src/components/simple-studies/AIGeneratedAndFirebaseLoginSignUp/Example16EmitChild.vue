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

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

button {
  min-width: 5rem;
  min-height: 2.5rem;
  padding: 0.55rem 0.85rem;
  border: 1px solid #c62828;
  border-radius: 0.55rem;
  background: #c62828;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
}

button:last-child {
  border-color: #86232a;
  background: #86232a;
}

button:hover {
  filter: brightness(0.9);
}
</style>
