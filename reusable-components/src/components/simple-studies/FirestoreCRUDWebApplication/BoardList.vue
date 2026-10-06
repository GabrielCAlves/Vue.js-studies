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
  <b-row>
    <b-col cols="12">
        <h2>
            Board list
            <router-link to="/add-board">(Add Board)</router-link>
        </h2>
        <b-table stripped hover :items="boards" :fields="fields">
            <template v-slot:cell(actions)="data">
                <b-button @click.stop="details(data.item)" variant="primary">Details</b-button>
            </template>
        </b-table>
    </b-col>
  </b-row>
</template>

<script>
import { db } from '@/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { useRouter } from 'vue-router';

const router = useRouter();

export default {
  name: 'BoardList',
  data() {
    return {
      fields: [
        { key: 'title', label: 'Title' },
        { key: 'actions', label: 'Actions' }
      ],
      boards: [],
      errors: [],
      unsubscribe: null,
    }
  },
  created() {
    const colRef = collection(db, 'boards');
    this.unsubscribe = onSnapshot(colRef, (querySnapshot) => {
      this.boards = [];
      querySnapshot.forEach((doc) => {
        this.boards.push({
          key: doc.id,
          title: doc.data().title,
        });
      });
    });
  },
  unmounted() {
    if (this.unsubscribe) this.unsubscribe();
  },
  methods: {
    details(board) {
      this.$router.push({ name: 'ShowBoard', params: { id: board.key } });
    }
  }
}
</script>

<style>
.table{
    width: 96%;
    margin: 0 auto;
}
</style>