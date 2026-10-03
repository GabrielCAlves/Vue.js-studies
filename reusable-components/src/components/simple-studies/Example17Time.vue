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
