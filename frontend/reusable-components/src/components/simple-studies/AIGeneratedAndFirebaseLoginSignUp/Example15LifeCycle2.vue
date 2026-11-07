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

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
  color: #493737;
}

p {
  width: 100%;
  margin: 0 0 0.35rem;
  color: #7f1d26;
  font-weight: 700;
}

button {
  min-height: 2.4rem;
  padding: 0.5rem 0.8rem;
  border: 1px solid #c62828;
  border-radius: 0.55rem;
  background: #c62828;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
}

button:hover {
  border-color: #a61f24;
  background: #a61f24;
}

#addButton {
  border-color: #86232a;
  background: #86232a;
}
</style>

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
