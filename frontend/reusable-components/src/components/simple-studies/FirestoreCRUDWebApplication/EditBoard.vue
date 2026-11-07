<template>
  <main class="board-page">
    <header class="board-page-header">
      <div>
        <span class="board-eyebrow">Firestore / Board</span>
        <h1>Edit board</h1>
        <p>Update the board details and save your changes.</p>
      </div>
      <router-link
        class="board-back-link"
        :to="{ name: 'ShowBoard', params: { id: key } }"
        >Back to board</router-link
      >
    </header>
    <b-jumbotron class="board-form-card">
      <b-form class="board-form" @submit="onSubmit">
        <b-form-group
          id="titleGroup"
          label="Enter Title"
        >
          <b-form-input
            id="title"
            v-model.trim="board.title"
            placeholder="Enter board title"
          />
        </b-form-group>
        <b-form-group
          id="descGroup"
          label="Enter Description"
        >
          <b-form-textarea
            id="description"
            v-model="board.description"
            placeholder="Describe this board"
            :rows="4"
            :max-rows="8"
            >{{ board.description }}</b-form-textarea
          >
        </b-form-group>
        <b-form-group
          id="authorGroup"
          label="Enter Author"
        >
          <b-form-input
            id="author"
            v-model.trim="board.author"
            placeholder="Enter author name"
          ></b-form-input>
        </b-form-group>
        <b-button class="board-submit" type="submit" variant="primary"
          >Save changes</b-button
        >
      </b-form>
    </b-jumbotron>
  </main>
</template>

<script>
import { db } from "@/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default {
  name: "EditBoard",
  data() {
    return {
      board: {},
    };
  },
  async created() {
    const ref = doc(db, "boards", this.$route.params.id);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      this.board = snap.data();
    } else {
      alert("No such document!");
    }
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      try {
        await setDoc(doc(db, "boards", this.$route.params.id), this.board);
        this.$router.push({
          name: "ShowBoard",
          params: { id: this.$route.params.id },
        });
      } catch (error) {
        alert("Error: " + error.message);
      }
    },
  },
};
</script>

<style scoped>
.board-page {
  box-sizing: border-box;
  min-height: 100vh;
  padding: clamp(2rem, 6vw, 5rem) clamp(1rem, 4vw, 3rem);
  background:
    radial-gradient(ellipse at 12% 12%, rgba(255, 170, 92, 0.2), transparent 34rem),
    #faf6f2;
}

.board-page-header {
  display: flex;
  width: min(100%, 42rem);
  align-items: end;
  justify-content: space-between;
  gap: 1.5rem;
  margin: 0 auto 1.75rem;
}

.board-eyebrow {
  display: inline-block;
  margin-bottom: 0.65rem;
  color: #c45d12;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.board-page-header h1 {
  margin: 0;
  color: #29231e;
  font-size: clamp(1.8rem, 5vw, 2.35rem);
  font-weight: 750;
  letter-spacing: -0.04em;
}

.board-page-header p {
  margin: 0.65rem 0 0;
  color: #756a60;
  line-height: 1.6;
}

.board-back-link {
  flex: 0 0 auto;
  color: #c45d12;
  font-weight: 700;
  text-decoration: none;
}

.board-back-link:hover {
  color: #a84c0b;
  text-decoration: underline;
}

:deep(.board-form-card) {
  box-sizing: border-box;
  width: min(100%, 42rem);
  margin: 0 auto;
  padding: clamp(1rem, 4vw, 2rem);
  border: 1px solid #eee4da;
  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 0 1.25rem 3.5rem rgba(69, 43, 20, 0.1);
}

:deep(.board-form) {
  display: grid;
  gap: 1rem;
}

:deep(.board-form .form-group) {
  margin: 0;
}

:deep(.board-form label) {
  margin-bottom: 0.5rem;
  color: #3a3028;
  font-size: 0.9rem;
  font-weight: 700;
}

:deep(.board-form .form-control) {
  min-height: 3rem;
  padding: 0.75rem 0.9rem;
  border: 1px solid #e4d8cc;
  border-radius: 0.65rem;
  background: #fdfaf7;
  color: #29231e;
  box-shadow: none;
}

:deep(.board-form textarea.form-control) {
  min-height: 8rem;
}

:deep(.board-form .form-control:focus) {
  border-color: #e27a21;
  background: #fff;
  box-shadow: 0 0 0 4px rgba(226, 122, 33, 0.16);
}

:deep(.board-submit) {
  min-height: 3rem;
  margin-top: 0.25rem;
  border-color: #c45d12;
  border-radius: 0.7rem;
  background: #c45d12;
  font-weight: 700;
}

:deep(.board-submit:hover) {
  border-color: #a84c0b;
  background: #a84c0b;
}

@media (max-width: 600px) {
  .board-page-header {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
