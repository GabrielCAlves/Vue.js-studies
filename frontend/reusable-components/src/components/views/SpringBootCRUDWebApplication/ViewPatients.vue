<template>
  <main class="patients-page">
    <Navbar />

    <section class="patients-container">
      <header class="patients-header">
        <div>
          <span class="patients-eyebrow">Patient records</span>
          <h1>Patients</h1>
          <p>View and manage your patient information.</p>
        </div>
        <a href="/add" class="add-patient-button">Add patient</a>
      </header>

      <div class="patients-table-card">
        <div class="table-scroll">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone number</th>
                <th scope="col">Gender</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="patient in patients" :key="patient.id">
                <th scope="row">{{ patient.id }}</th>
                <td>{{ patient.name }}</td>
                <td>{{ patient.email }}</td>
                <td>{{ patient.pNo }}</td>
                <td>{{ patient.gender }}</td>
                <td class="patient-actions">
                  <a :href="`/edit/${patient.id}`" class="edit-button">Edit</a>
                  <button
                    class="delete-button"
                    type="button"
                    @click="($event) => deletePatients(patient.id)"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
//Need to start the backedn on Intellij (Name of the backend: backend), run the BackendApplication file and verify the database in PostgreSQL (Name of the database => schemas => public => tables => columns)
import { defineComponent } from "vue";
import Navbar from "../../simple-studies/SpringBootCRUDWebApplication/Navbar.vue";

export default defineComponent({
  name: "ViewPatients",
  components: {
    Navbar,
  },
  data() {
    return {
      patients: [] as any[],
    };
  },
  beforeMount() {
    this.getPatients();
  },
  methods: {
    getPatients() {
      fetch("http://localhost:8080/patients")
        .then((res) => res.json())
        .then((data) => {
          this.patients = data;
          console.log(data);
        });
    },
    deletePatients(id: any) {
      fetch(`http://localhost:8080/patient/${id}`, {
        method: "DELETE",
      }).then((data) => {
        console.log(data);
        this.getPatients();
      });
    },
  },
});
</script>

<style scoped>
.patients-page {
  min-height: 100vh;
  background:
    radial-gradient(ellipse at 12% 12%, rgba(113, 255, 144, 0.2), transparent 34rem),
    #f3f7f4;
}

.patients-container {
  width: min(100%, 90rem);
  margin: 0 auto;
  padding: clamp(2rem, 6vw, 5rem) clamp(1rem, 4vw, 3rem);
}

.patients-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1.75rem;
}

.patients-eyebrow {
  display: inline-block;
  margin-bottom: 0.65rem;
  color: #278044;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.patients-header h1 {
  margin: 0;
  color: #17251b;
  font-size: clamp(1.8rem, 5vw, 2.35rem);
  font-weight: 750;
  letter-spacing: -0.04em;
}

.patients-header p {
  margin: 0.65rem 0 0;
  color: #68766c;
  line-height: 1.6;
}

.add-patient-button,
.edit-button,
.delete-button {
  display: inline-flex;
  min-height: 2.5rem;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 0.65rem;
  cursor: pointer;
  font: inherit;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 160ms ease, color 160ms ease, transform 160ms ease;
}

.add-patient-button {
  flex: 0 0 auto;
  padding: 0.65rem 1rem;
  background: #278044;
  color: #fff;
}

.add-patient-button:hover {
  transform: translateY(-1px);
  background: #1f6d38;
  color: #fff;
}

.patients-table-card {
  overflow: hidden;
  border: 1px solid #e3ebe5;
  border-radius: 1.1rem;
  background: #fff;
  box-shadow: 0 1.25rem 3.5rem rgba(24, 55, 35, 0.1);
}

.table-scroll {
  overflow-x: auto;
}

.table {
  min-width: 46rem;
  margin: 0;
  --bs-table-bg: #fff;
  --bs-table-color: #34443a;
  --bs-table-striped-bg: #f5f9f5;
  --bs-table-striped-color: #34443a;
  --bs-table-hover-bg: #eff8f1;
  --bs-table-hover-color: #26372b;
  --bs-table-border-color: #e7eee8;
}

.table th,
.table td {
  padding: 1rem 1.1rem;
  vertical-align: middle;
}

.table thead th {
  border-bottom: 1px solid #dfe9e1;
  background: #f5f9f5;
  color: #526357;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
}

.table tbody th {
  color: #278044;
  font-weight: 700;
}

.patient-actions {
  display: flex;
  gap: 0.5rem;
  white-space: nowrap;
}

.edit-button,
.delete-button {
  min-height: 2.2rem;
  padding: 0.45rem 0.75rem;
}

.edit-button {
  background: #eff8f1;
  color: #216d39;
}

.edit-button:hover {
  background: #dff0e3;
  color: #19592e;
}

.delete-button {
  background: #fff0ef;
  color: #a63c35;
}

.delete-button:hover {
  background: #ffe0dd;
  color: #872d27;
}

@media (max-width: 600px) {
  .patients-header {
    align-items: stretch;
    flex-direction: column;
  }

  .add-patient-button {
    align-self: flex-start;
  }
}
</style>
