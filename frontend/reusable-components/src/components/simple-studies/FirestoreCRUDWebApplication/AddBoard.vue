<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Board
        <router-link to="/">(Board List)</router-link>
      </h2>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group
            id="titleGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Enter Title"
          >
            <b-form-input id="title" v-model.trim="board.title" />
          </b-form-group>
          <b-form-group
            id="descGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Enter Description"
          >
            <b-form-textarea
              id="description"
              v-model="board.description"
              placeholder="Enter something"
              :rows="2"
              :max-rows="6"
              >{{ board.description }}</b-form-textarea
            >
          </b-form-group>
          <b-form-group
            id="authorGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Enter Author"
          >
            <b-form-input
              id="author"
              v-model.trim="board.author"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Save</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "vue-router";
import { serverTimestamp } from "firebase/firestore";

export default {
  name: "AddBoard",
  data() {
    return {
      board: { title: "", description: "", author: "" },
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      try {
        await addDoc(collection(db, "boards"), this.board);
        await addDoc(collection(db, "boards"), {
          ...this.board,
          createdAt: serverTimestamp(),
        });
        this.$router.push({ name: "BoardList" });
      } catch (error) {
        alert("Error adding document: " + error.message);
      }
    },
  },
};
</script>

<style>
.jumbotron {
  padding: 2rem;
}
</style>
