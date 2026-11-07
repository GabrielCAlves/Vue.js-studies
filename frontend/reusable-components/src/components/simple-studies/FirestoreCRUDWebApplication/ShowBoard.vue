<template>
  <main class="board-page">
    <header class="board-page-header">
      <div>
        <span class="board-eyebrow">Firestore / Board details</span>
        <h1>Board details</h1>
      </div>
      <router-link class="board-back-link" to="/firestore"
        >Back to boards</router-link
      >
    </header>
    <section class="board-detail-card">
      <span class="board-eyebrow">Board</span>
      <h2>{{ board.title }}</h2>
      <dl class="board-details">
        <div>
          <dt>Description</dt>
          <dd>{{ board.description || "No description provided." }}</dd>
        </div>
        <div>
          <dt>Author</dt>
          <dd>{{ board.author || "Not specified" }}</dd>
        </div>
      </dl>
      <div class="board-detail-actions">
        <b-button
          class="edit-btn"
          variant="success"
          @click.stop="editBoard(key)"
          >Edit</b-button
        >
        <b-button
          class="delete-btn"
          variant="danger"
          @click.stop="deleteBoard(key)"
          >Delete</b-button
        >
      </div>
    </section>
  </main>
</template>

<script>
import { db } from "@/firebase";
import { doc, getDoc, deleteDoc } from "firebase/firestore";

export default {
  name: "ShowBoard",
  data() {
    return {
      key: "",
      board: {},
    };
  },
  async created() {
    const ref = doc(db, "boards", this.$route.params.id);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      this.key = snap.id;
      this.board = snap.data();
    } else {
      alert("There's no such document!");
    }
  },
  methods: {
    editBoard(id) {
      this.$router.push({ name: "EditBoard", params: { id } });
    },
    async deleteBoard(id) {
      try {
        await deleteDoc(doc(db, "boards", id));
        this.$router.push({ name: "BoardList" });
      } catch (error) {
        alert("Error removing document: " + error.message);
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
  width: min(100%, 56rem);
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

.board-back-link {
  color: #c45d12;
  font-weight: 700;
  text-decoration: none;
}

.board-back-link:hover {
  color: #a84c0b;
  text-decoration: underline;
}

.board-detail-card {
  box-sizing: border-box;
  width: min(100%, 56rem);
  margin: 0 auto;
  padding: clamp(1.5rem, 5vw, 2.75rem);
  border: 1px solid #eee4da;
  border-radius: 1.25rem;
  background: #fff;
  color: #29231e;
  box-shadow: 0 1.25rem 3.5rem rgba(69, 43, 20, 0.1);
}

.board-detail-card > .board-eyebrow {
  margin-bottom: 0.5rem;
}

.board-detail-card h2 {
  margin: 0 0 1.75rem;
  color: #29231e;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 750;
}

.board-details {
  display: grid;
  gap: 1.25rem;
  margin: 0;
}

.board-details dt {
  margin-bottom: 0.35rem;
  color: #756a60;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.board-details dd {
  margin: 0;
  color: #3f3a35;
  line-height: 1.65;
  overflow-wrap: anywhere;
}

.board-detail-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee5dc;
}

:deep(.board-detail-actions .edit-btn),
:deep(.board-detail-actions .delete-btn) {
  min-width: 7rem;
  font-weight: 700;
}

:deep(.board-detail-actions .edit-btn) {
  border-color: #c45d12;
  background: #c45d12;
}

:deep(.board-detail-actions .edit-btn:hover) {
  border-color: #a84c0b;
  background: #a84c0b;
}

@media (max-width: 600px) {
  .board-page-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .board-detail-actions {
    flex-direction: column;
  }

  :deep(.board-detail-actions .edit-btn),
  :deep(.board-detail-actions .delete-btn) {
    width: 100%;
  }
}
</style>
