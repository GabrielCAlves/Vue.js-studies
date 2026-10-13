<template>
  <div class="page update">
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

      <button>Update Smoothie Recipe</button>

      <p class="error">{{ formError }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import supabase from "../../simple-studies/SupabaseConfig/supabaseClient";
import { defineComponent, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "Update",
  setup() {
    const id = useRoute().params.id;
    const router = useRouter();

    const title = ref<string | null>(null);
    const method = ref<string | null>(null);
    const rating = ref<number | null>(null);
    const formError = ref<string | null>(null);

    const fetchSmoothie = async () => {
      const { data, error } = await supabase
        .from("smoothies")
        .select()
        .eq("id", id)
        .single(); // single function is used because it returns the object itself, instead of an array with a single data

      if (error) {
        console.log(error);
        router.push("/");
      }

      if (data) {
        setTitle(data.title);
        setMethod(data.method);
        setRating(data.rating);
        console.log(data);
      }
    };

    function setTitle(event: Event | string) {
      if (typeof event === "string") {
        title.value = event;
        return;
      }

      const input = event.target;
      if (input instanceof HTMLInputElement) {
        title.value = input.value;
      }
    }

    function setMethod(event: Event | string) {
      if (typeof event === "string") {
        method.value = event;
        return;
      }

      const input = event.target;
      if (input instanceof HTMLInputElement) {
        method.value = input.value;
      }
    }

    function setRating(event: Event | number) {
      if (typeof event === "number") {
        rating.value = event;
        return;
      }

      const input = event.target;
      if (input instanceof HTMLInputElement) {
        const value = input.valueAsNumber;
        rating.value = Number.isNaN(value) ? null : value;
      }
    }

    fetchSmoothie();

    function setFormError(message: string | null) {
      formError.value = message;
    }

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
        .update([
          {
            title: title.value.trim(),
            method: method.value.trim(),
            rating: rating.value,
          },
        ])
        .select()
        .eq("id", id);

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

    return {
      id,
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
