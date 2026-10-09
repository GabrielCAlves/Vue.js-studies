<script setup>
import { ref, computed } from "vue";
import Page1 from "./Example13Pages/PageOne.vue";
import Page2 from "./Example13Pages/PageTwo.vue";
import PageNotFound from "./Example13Pages/ErrorPage.vue";

const routes = {
  "/": Page1,
  "/page2": Page2,
  "/404": PageNotFound,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] || PageNotFound;
});
</script>

<template>
  <div>
    <a href="#/">Page1</a> | <a href="#/page2">Page2</a>

    <component :is="currentView" />
  </div>
</template>
