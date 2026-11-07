<template>
  <main class="add-patient-page">
    <Navbar />

    <section class="patient-form-section">
      <div class="patient-form-card">
        <header class="patient-form-header">
          <span class="patient-form-eyebrow">Patient records</span>
          <h1>Add a patient</h1>
          <p>Fill in the details below to add a patient to your records.</p>
        </header>

        <form class="patient-form" @submit.prevent="addPatient">
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

          <fieldset class="gender-field">
            <legend>Gender</legend>
            <div class="gender-options">
              <label class="gender-option" for="male">
                <input
                  id="male"
                  v-model="patient.gender"
                  type="radio"
                  name="gender"
                  value="male"
                />
                <span>Male</span>
              </label>
              <label class="gender-option" for="female">
                <input
                  id="female"
                  v-model="patient.gender"
                  type="radio"
                  name="gender"
                  value="female"
                />
                <span>Female</span>
              </label>
              <label class="gender-option" for="others">
                <input
                  id="others"
                  v-model="patient.gender"
                  type="radio"
                  name="gender"
                  value="others"
                />
                <span>Others</span>
              </label>
            </div>
          </fieldset>

          <div class="form-actions">
            <button type="submit">Add patient</button>
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
  name: "AddPatient",
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
  methods: {
    addPatient() {
      fetch("http://localhost:8080/add", {
        method: "POST",
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
.add-patient-page {
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

.form-field label,
.gender-field legend {
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

.gender-field {
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
}

.gender-field legend {
  margin-bottom: 0.65rem;
}

.gender-options {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.65rem;
}

.gender-option {
  display: flex;
  min-height: 2.9rem;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.55rem;
  border: 1px solid #d5dfd7;
  border-radius: 0.65rem;
  background: #fbfdfb;
  color: #435248;
  cursor: pointer;
  font-size: 0.88rem;
  transition: border-color 160ms ease, background 160ms ease, color 160ms ease;
}

.gender-option:has(input:checked) {
  border-color: #3a9a58;
  background: #eff8f1;
  color: #216d39;
}

.gender-option input {
  accent-color: #278044;
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

@media (max-width: 380px) {
  .gender-options {
    grid-template-columns: 1fr;
  }
}
</style>
