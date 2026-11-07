<template>
  <div class="">
    <p>Current time: {{ time }}</p>
    <p>Current date: {{ date.toLocaleDateString() }}</p>
    <p>Full time: {{ fulltime }}</p>
    <p>Cronometer: {{ cronometer }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from "vue";

const time = ref(new Date().toLocaleTimeString());
const date = ref(new Date());
const fulltime = ref(
  new Date().getDate() +
    "/" +
    (new Date().getMonth() + 1) +
    "/" +
    new Date().getFullYear() +
    " " +
    new Date().toLocaleTimeString(),
);
const cronometer = ref(10);

const timer = setInterval(() => {
  time.value = new Date().toLocaleTimeString();
}, 1000);

const stopTimer = () => {
  clearInterval(timer);
  console.log("Timer stopped");
};

const fulltimer = setInterval(() => {
  fulltime.value =
    new Date().getDate() +
    "/" +
    (new Date().getMonth() + 1) +
    "/" +
    new Date().getFullYear() +
    " " +
    new Date().toLocaleTimeString();
}, 1000);

const cronometerTimer = setInterval(() => {
  cronometer.value--;
  if (cronometer.value <= 0) {
    clearInterval(cronometerTimer);
    console.log("Cronometer finished");
  }
}, 1000);

onUnmounted(() => {
  clearInterval(timer);
  clearInterval(fulltimer);
  clearInterval(cronometerTimer);
  console.log("Componente destruído");
});
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.7rem;
}

p {
  margin: 0;
  padding: 0.8rem;
  border: 1px solid #f0dddd;
  border-radius: 0.6rem;
  background: #fff8f7;
  color: #493737;
  line-height: 1.5;
}

p::first-letter {
  color: #b4232d;
  font-weight: 800;
}

@media (max-width: 480px) {
  div {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
