<template>
  <div class="">
    <form
      action="https://gabrielcaportfolio.web.app"
      @submit.prevent="ValidateForm"
    >
      <input type="submit" value="Send Form" />
    </form>
  </div>
</template>

<script setup lang="ts">
function ValidateForm(event: { preventDefault: () => void }) {
  alert("A form was sent");

  event.preventDefault(); // Without this, the page will be reloaded or change to the site in the form action
}
</script>

<style scoped>
/* ===== Estilos Base (Mobile First) ===== */
/*
. {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}
*/

/* ===== Tablet (>= 768px) ===== */
/*
@media (min-width: 768px) {
  . {
    padding: 1.5rem;
  }
}
*/

/* ===== Desktop (>= 1024px) ===== */
/*
@media (min-width: 1024px) {
  . {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
}
*/

/* ===== Telas Grandes (>= 1440px) ===== */
/*
@media (min-width: 1440px) {
  . {
    max-width: 1400px;
  }
}
*/
form {
  display: flex;
  max-width: none;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  border-radius: 0;
  background: transparent;
}

input[type="submit"] {
  width: auto;
  min-height: 2.6rem;
  margin: 0;
  padding: 0.6rem 1rem;
  border: 0;
  border-radius: 0.6rem;
  background: #c62828;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
}

input[type="submit"]:hover {
  background: #a61f24;
}
</style>
