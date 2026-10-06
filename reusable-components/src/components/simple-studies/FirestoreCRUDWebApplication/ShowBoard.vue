<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Show Board
        <router-link to="/">(Board List)</router-link>
      </h2>
      <b-jumbotron>
        <h1>{{ board.title }}</h1>
        <p class="lead">
          Title: {{ board.title }} <br>
          Description: {{ board.description }} <br>
          Author: {{ board.author }}
        </p>
        <hr class="my-4">
        <b-button class="edit-btn" variant="success" @click.stop="editBoard(key)">Edit</b-button>
        <b-button variant="danger" @click.stop="deleteBoard(key)">Delete</b-button>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import { db } from '@/firebase';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';

export default {
  name: 'ShowBoard',
  data() {
    return {
      key: '',
      board: {}
    }
  },
  async created() {
    const ref = doc(db, 'boards', this.$route.params.id);
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
      this.$router.push({ name: 'EditBoard', params: { id } });
    },
    async deleteBoard(id) {
      try {
        await deleteDoc(doc(db, 'boards', id));
        this.$router.push({ name: 'BoardList' });
      } catch (error) {
        alert('Error removing document: ' + error.message);
      }
    }
  }
}
</script>

<style>
.jumbotron{
    padding: 2rem;
}

.edit-btn{
    margin-right: 20px;
    width: 70px;
}
</style>