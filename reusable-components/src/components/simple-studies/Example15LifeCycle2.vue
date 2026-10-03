<template>
  <div class="">
    <p>Incremented Number: {{ incrementedNumber }}</p>
    <button @click="UpdateAction">Update Action</button>
    <button id="destroyButton" @click="destroyComponent">
      Destroy This Button
    </button>
    <button id="addButton" @click="addComponent">Add Previous Button</button>
  </div>
</template>

<script setup lang="ts">
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
} from "vue";

let incrementedNumber = ref(0);

function UpdateAction() {
  incrementedNumber.value++;
  console.log("Number count: ", incrementedNumber.value);
}

var destroyButton = document.getElementById("destroyButton");

function destroyComponent() {
  destroyButton = document.getElementById("destroyButton");
  console.log("Destroying component...");
  console.log(destroyButton);
  if (destroyButton) {
    destroyButton.removeEventListener("click", destroyComponent);
    destroyButton.remove();
  }
}

function addComponent() {
  console.log("Adding component...");
  destroyButton = document.getElementById("destroyButton");
  console.log(destroyButton);
  // Implementation for adding component
  if (!destroyButton) {
    destroyButton = document.createElement("button");
    destroyButton.id = "destroyButton";
    destroyButton.textContent = "Destroy This Button";
    destroyButton.addEventListener("click", destroyComponent);
    document.body.appendChild(destroyButton);
  }
}

// ===== Lifecycle Hooks =====
onBeforeMount(() => {
  console.log("Componente será montado");
});

onMounted(() => {
  console.log("Componente montado");
});

onBeforeUpdate(() => {
  console.log("Componente será atualizado");
});

onUpdated(() => {
  console.log("Componente atualizado");
});

onBeforeUnmount(() => {
  console.log("Componente será desmontado");
});

onUnmounted(() => {
  console.log("Componente destruído");
});
</script>

<!-- 
Lifecycle Hooks in Vue 3 (Composition API):
Options API (Vue 2/3)	    Composition API
    beforeCreate	    (use setup() directly)
    created	            (use setup() directly)
    beforeMount	             onBeforeMount
    mounted	                   onMounted
    beforeUpdate	        onBeforeUpdate
    updated	                   onUpdated
 beforeUnmount/beforeDestroy   onBeforeUnmount
 unmounted/destroyed	      onUnmounted
    errorCaptured	        onErrorCaptured
    activated	              onActivated
   deactivated	             onDeactivated
 -->
