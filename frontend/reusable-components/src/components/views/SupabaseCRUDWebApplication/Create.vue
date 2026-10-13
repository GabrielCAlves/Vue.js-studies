<template>
  <div class="page create">
    <h2>Create</h2>
    <form @submit.prevent="handleSubmit">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="title" v-on:change="setTitle" />

      <label for="method">Method:</label>
      <textarea id="method" v-model="method" v-on:change="setMethod" />

      <label for="rating">Rating:</label>
      <input
        type="number"
        id="rating"
        v-model.number="rating"
        v-on:change="setRating"
      />

      <button>Create Smoothie Recipe</button>

      <p class="error">{{ formError }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import supabase from "../../simple-studies/SupabaseConfig/supabaseClient";

export default defineComponent({
  name: "Create",
  setup() {
    const router = useRouter();
    const title = ref<string | null>(null);
    const method = ref<string | null>(null);
    const rating = ref<number | null>(null);
    const formError = ref<string | null>(null);

    const handleSubmit = async () => {
      if (
        !title.value?.trim() ||
        !method.value?.trim() ||
        rating.value === null
      ) {
        setFormError("Please fill in all the fields correctly");
        return;
      }

      const { data, error } = await supabase
        .from("smoothies")
        .insert([
          {
            title: title.value.trim(),
            method: method.value.trim(),
            rating: rating.value,
          },
        ])
        .select();

      if (error) {
        console.log(error);
        setFormError("Please fill in all the fields correctly");
      }

      if (data) {
        console.log(data);
        setFormError(null);
      }

      router.push("/");
    };

    function setTitle(event: Event) {
      const input = event.target;
      if (input instanceof HTMLInputElement) {
        title.value = input.value;
      }
    }

    function setMethod(event: Event) {
      const input = event.target;
      if (input instanceof HTMLTextAreaElement) {
        method.value = input.value;
      }
    }

    function setRating(event: Event) {
      const input = event.target;
      if (input instanceof HTMLInputElement) {
        const value = input.valueAsNumber;
        rating.value = Number.isNaN(value) ? null : value;
      }
    }

    function setFormError(message: string | null) {
      formError.value = message;
    }

    return {
      title,
      method,
      rating,
      formError,
      handleSubmit,
      setTitle,
      setMethod,
      setRating,
      setFormError,
    };
  },
});
</script>
