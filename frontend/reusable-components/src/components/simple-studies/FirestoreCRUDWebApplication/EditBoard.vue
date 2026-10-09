<template>
  <b-row>
    <b-col cols="12">
        <h2>
            Edit Board
            <router-link :to="{name: 'ShowBoard', params: {id: key}}">(Show Board)</router-link>
        </h2>
        <b-jumbotron>
            <b-form @submit="onSubmit">
                <b-form-group id="titleGroup" horizontal :label-cols="4" breakpoint="md" label="Enter Title">
                    <b-form-input id="title" v-model.trim="board.title" />
                </b-form-group>
                <b-form-group id="descGroup" horizontal :label-cols="4" breakpoint="md" label="Enter Description">
                    <b-form-textarea id="description" v-model="board.description" placeholder="Enter something" :rows="2" :max-rows="6">{{ board.description }}</b-form-textarea>
                </b-form-group>
                <b-form-group id="authorGroup" horizontal :label-cols="4" breakpoint="md" label="Enter Author">
                    <b-form-input id="author" v-model.trim="board.author"></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Update</b-button>
            </b-form>
        </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import { db } from '@/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export default {
  name: 'EditBoard',
  data() {
    return {
      board: {}
    }
  },
  async created() {
    const ref = doc(db, 'boards', this.$route.params.id);
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
        await setDoc(doc(db, 'boards', this.$route.params.id), this.board);
        this.$router.push({
          name: 'ShowBoard',
          params: { id: this.$route.params.id }
        });
      } catch (error) {
        alert('Error: ' + error.message);
      }
    }
  }
}
</script>

<style>
.jumbotron{
    padding: 2rem;
}
</style>