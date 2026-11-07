<script setup>
import { ref, computed } from "vue";
import Page1 from "../Example13Pages/PageOne.vue";
import Page2 from "../Example13Pages/PageTwo.vue";
import PageNotFound from "../Example13Pages/ErrorPage.vue";

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

<style scoped>
div {
  color: #493737;
}

a {
  display: inline-block;
  margin-right: 0.35rem;
  padding: 0.45rem 0.7rem;
  border-radius: 0.5rem;
  background: #fff0ef;
  color: #a61f24;
  font-weight: 700;
  text-decoration: none;
}

a:hover {
  background: #c62828;
  color: #fff;
}

div :deep(h1) {
  margin: 1rem 0 0;
  color: #7f1d26;
  font-size: 1.2rem;
}
</style>
