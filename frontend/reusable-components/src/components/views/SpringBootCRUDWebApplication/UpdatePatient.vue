<template>
  <main class="update-patient-page">
    <Navbar />

    <section class="patient-form-section">
      <div class="patient-form-card">
        <header class="patient-form-header">
          <span class="patient-form-eyebrow">Patient records</span>
          <h1>Update patient</h1>
          <p>Make changes to the patient's details below.</p>
        </header>

        <form class="patient-form" @submit.prevent="updatePatient">
          <div class="form-field">
            <label for="name">Name</label>
            <input
              id="name"
              v-model="patient.name"
              type="text"
              name="name"
              placeholder="Enter patient's full name"
              autocomplete="name"
              required
            />
          </div>

          <div class="form-field">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="patient.email"
              type="email"
              name="email"
              placeholder="name@example.com"
              autocomplete="email"
              required
            />
          </div>

          <div class="form-field">
            <label for="pNo">Phone number</label>
            <input
              id="pNo"
              v-model="patient.pNo"
              type="tel"
              name="pNo"
              placeholder="Enter phone number"
              autocomplete="tel"
              required
            />
          </div>

          <div class="form-actions">
            <button type="submit">Save changes</button>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../../simple-studies/SpringBootCRUDWebApplication/Navbar.vue";

export default defineComponent({
  name: "UpdatePatient",
  components: {
    Navbar,
  },
  data() {
    return {
      patient: {
        name: "",
        email: "",
        gender: "",
        pNo: "",
      },
    };
  },
  beforeMount() {
    this.getPatient();
  },
  methods: {
    getPatient() {
      fetch(`http://localhost:8080/patient/${this.$route.params.id}`)
        .then((res) => res.json())
        .then((data) => {
          this.patient = data;
          console.log(this.patient);
        });
    },
    updatePatient() {
      fetch("http://localhost:8080/patient", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.patient),
      }).then((data) => {
        console.log(data);
        this.$router.push("/springboot");
      });
    },
  },
});
</script>

<style scoped>
.update-patient-page {
  min-height: 100vh;
  background:
    radial-gradient(ellipse at 12% 12%, rgba(113, 255, 144, 0.2), transparent 34rem),
    #f3f7f4;
}

.patient-form-section {
  display: grid;
  min-height: calc(100vh - 74px);
  place-items: start center;
  padding: clamp(2rem, 6vw, 5rem) 1.25rem;
}

.patient-form-card {
  width: min(100%, 34rem);
  padding: clamp(1.5rem, 5vw, 2.75rem);
  border: 1px solid #e3ebe5;
  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 0 1.25rem 3.5rem rgba(24, 55, 35, 0.1);
}

.patient-form-header {
  margin-bottom: 2rem;
}

.patient-form-eyebrow {
  display: inline-block;
  margin-bottom: 0.65rem;
  color: #278044;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.patient-form-header h1 {
  margin: 0;
  color: #17251b;
  font-size: clamp(1.8rem, 5vw, 2.35rem);
  font-weight: 750;
  letter-spacing: -0.04em;
}

.patient-form-header p {
  margin: 0.65rem 0 0;
  color: #68766c;
  line-height: 1.6;
}

.patient-form {
  display: grid;
  gap: 1.2rem;
}

.form-field {
  display: grid;
  gap: 0.5rem;
}

.form-field label {
  color: #26372b;
  font-size: 0.9rem;
  font-weight: 700;
}

.form-field input {
  width: 100%;
  min-height: 3rem;
  padding: 0.75rem 0.9rem;
  border: 1px solid #d5dfd7;
  border-radius: 0.65rem;
  outline: none;
  background: #fbfdfb;
  color: #17251b;
  transition: border-color 160ms ease, box-shadow 160ms ease, background 160ms ease;
}

.form-field input::placeholder {
  color: #98a39a;
}

.form-field input:focus {
  border-color: #3a9a58;
  background: #fff;
  box-shadow: 0 0 0 4px rgba(58, 154, 88, 0.14);
}

.form-actions {
  padding-top: 0.4rem;
}

.form-actions button {
  width: 100%;
  min-height: 3.1rem;
  border: 0;
  border-radius: 0.7rem;
  background: #278044;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  transition: background 160ms ease, transform 160ms ease, box-shadow 160ms ease;
}

.form-actions button:hover {
  transform: translateY(-1px);
  background: #1f6d38;
  box-shadow: 0 0.5rem 1rem rgba(39, 128, 68, 0.2);
}

.form-actions button:focus-visible {
  outline: 3px solid rgba(39, 128, 68, 0.35);
  outline-offset: 3px;
}
</style>
