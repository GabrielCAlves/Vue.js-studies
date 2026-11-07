<!-- eslint-disable vue/valid-template-root -->
<!-- <template>
  <section class="crud">
    <header class="crud__header">
      <div>
        <h2 class="crud__title">Boards</h2>
        <p class="crud__subtitle">Realtime list of the Firestore "boards" collection.</p>
      </div>
      <router-link class="crud__btn crud__btn--primary" to="/add-board">Add board</router-link>
    </header>

    <p v-if="loading" class="crud__status">Loading boards...</p>
    <p v-else-if="error" class="crud__alert">{{ error }}</p>
    <p v-else-if="boards.length === 0" class="crud__status">
      No boards yet — use "Add board" to create the first one.
    </p>

    <ul v-else class="board-list">
      <li v-for="board in boards" :key="board.id" class="board-list__item">
        <div class="board-list__main">
          <h3 class="board-list__title">
            <router-link :to="`/show-board/${board.id}`">{{ board.title }}</router-link>
          </h3>
          <p class="board-list__description">{{ board.description || "No description." }}</p>
          <p class="board-list__meta">Created {{ formatFirestoreDate(board.createdAt) }}</p>
        </div>

        <div class="board-list__actions">
          <router-link class="crud__btn" :to="`/edit-board/${board.id}`">Edit</router-link>
          <button
            class="crud__btn crud__btn--danger"
            type="button"
            :disabled="removingId === board.id"
            @click="remove(board.id)"
          >
            {{ removingId === board.id ? "Removing..." : "Delete" }}
          </button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import "./crud.css";
import { useBoards } from "@/composables/useBoards";
import { formatFirestoreDate } from "@/utils/firestoreDate";

const { boards, loading, error, removingId, remove } = useBoards();
</script> -->

<template>
  <div id="boardList" class="board-page">
    <header class="board-page-header">
      <div>
        <span class="board-eyebrow">Firestore</span>
        <h1>Boards</h1>
        <p>Browse and manage your boards.</p>
      </div>
      <router-link class="board-primary-link" to="/add-board"
        >Add board</router-link
      >
    </header>
    <section class="board-table-card">
      <b-table
        striped
        hover
        responsive
        :items="boards"
        :fields="fields"
        id="table"
      >
        <template v-slot:cell(actions)="data">
          <b-button
            class="board-details-button"
            @click.stop="details(data.item)"
            variant="primary"
            >Details</b-button
          >
        </template>
      </b-table>
    </section>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useRouter } from "vue-router";

const router = useRouter();

export default {
  name: "BoardList",
  data() {
    return {
      fields: [
        { key: "title", label: "Title" },
        { key: "actions", label: "Actions" },
        { key: "createdTime", label: "Created at:" },
      ],
      boards: [],
      errors: [],
      unsubscribe: null,
    };
  },
  created() {
    const colRef = collection(db, "boards");
    this.unsubscribe = onSnapshot(colRef, (querySnapshot) => {
      this.boards = [];
      querySnapshot.forEach((doc) => {
        this.boards.push({
          key: doc.id,
          title: doc.data().title,
          createdTime: doc.data().createdAt?.toDate().toLocaleString(),
        });
      });
    });
  },
  unmounted() {
    if (this.unsubscribe) this.unsubscribe();
  },
  methods: {
    details(board) {
      this.$router.push({ name: "ShowBoard", params: { id: board.key } });
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
  width: min(100%, 90rem);
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

.board-primary-link {
  display: inline-flex;
  min-height: 2.75rem;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  padding: 0.65rem 1rem;
  border-radius: 0.65rem;
  background: #c45d12;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  transition: background 160ms ease, transform 160ms ease;
}

.board-primary-link:hover {
  transform: translateY(-1px);
  background: #a84c0b;
  color: #fff;
}

.board-table-card {
  width: min(100%, 90rem);
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid #eee4da;
  border-radius: 1.1rem;
  background: #fff;
  box-shadow: 0 1.25rem 3.5rem rgba(69, 43, 20, 0.1);
}

:deep(#table) {
  margin: 0;
  --bs-table-bg: #fff;
  --bs-table-color: #3f3a35;
  --bs-table-striped-bg: #fbf6f1;
  --bs-table-striped-color: #3f3a35;
  --bs-table-hover-bg: #fff1e3;
  --bs-table-hover-color: #3a3028;
  --bs-table-border-color: #eee5dc;
}

:deep(#table th),
:deep(#table td) {
  padding: 1rem 1.1rem;
  text-align: center;
  vertical-align: middle;
}

:deep(#table thead th) {
  background: #fbf6f1;
  color: #65594e;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

:deep(.board-details-button) {
  border-color: #c45d12;
  background: #c45d12;
  font-weight: 700;
}

:deep(.board-details-button:hover) {
  border-color: #a84c0b;
  background: #a84c0b;
}

@media (max-width: 600px) {
  .board-page-header {
    align-items: stretch;
    flex-direction: column;
  }

  .board-primary-link {
    align-self: flex-start;
  }
}
</style>
