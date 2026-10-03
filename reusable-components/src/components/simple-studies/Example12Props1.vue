<template>
  <div class="">
    <Example12Props2
      name="Gabriel"
      age="25"
      :city="city"
      :cities_Props2="cities"
      :function_Props1="Message"
    />
    <br />
    <Example12Props3
      name="Gabriel"
      :age="25"
      :favourite-colors="['red', 'blue', 'green']"
      is-available
      >></Example12Props3
    >
  </div>
</template>

<script setup lang="ts">
import Example12Props2 from "./Example12Props2.vue";
import Example12Props3 from "./Example12Props3.vue";

let city = "São Paulo";
let cities = ["São Paulo", "Rio de Janeiro", "Curitiba", "Florianópolis"];

function Message() {
  alert("Function created in Example12Props1");
}
</script>
