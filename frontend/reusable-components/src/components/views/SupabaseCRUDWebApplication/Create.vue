<template>
  <main class="page create">
    <nav>
      <h1>Supa Smoothies</h1>
      <router-link to="/supabase">Home</router-link>
      <router-link to="/create">Create New Smoothie</router-link>
    </nav>

    <section class="recipe-panel">
      <header class="recipe-header">
        <span class="recipe-eyebrow">Supa Smoothies</span>
        <h1>Create a recipe</h1>
        <p>Share a new smoothie with your collection.</p>
      </header>

      <form class="recipe-form" @submit.prevent="handleSubmit">
        <div class="form-field">
          <label for="title">Title</label>
          <input
            type="text"
            id="title"
            v-model="title"
            v-on:change="setTitle"
            placeholder="e.g. Green glow smoothie"
            required
          />
        </div>

        <div class="form-field">
          <label for="method">Method</label>
          <textarea
            id="method"
            v-model="method"
            v-on:change="setMethod"
            placeholder="Describe the ingredients and preparation"
            rows="5"
            required
          />
        </div>

        <div class="form-field">
          <label for="rating">Rating</label>
          <input
            type="number"
            id="rating"
            v-model.number="rating"
            v-on:change="setRating"
            placeholder="Rate from 1 to 12"
            min="1"
            max="5"
            required
          />
        </div>

        <button class="recipe-submit" type="submit">
          Create smoothie recipe
        </button>

        <p v-if="formError" class="error" role="alert">{{ formError }}</p>
      </form>
    </section>
  </main>
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

      router.push("/supabase");
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

<style scoped>
.page.create {
  box-sizing: border-box;
  width: 100%;
  max-width: none;
  min-height: 100vh;
  margin: 0;
  padding: 0rem;
  background: radial-gradient(
      ellipse at 12% 12%,
      rgba(18, 188, 162, 0.14),
      transparent 34rem
    ),
    #f4f7f6;
  font-family: "Poppins", sans-serif;
}

nav {
  margin-bottom: 2rem;
}

.recipe-panel {
  width: min(100%, 42rem);
  margin: 0 auto;
  padding: clamp(1.5rem, 5vw, 2.75rem);
  border: 1px solid #e3ebe8;
  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 0 1.25rem 3.5rem rgba(25, 65, 58, 0.1);
}

.recipe-header {
  margin-bottom: 2rem;
}

.recipe-eyebrow {
  display: inline-block;
  margin-bottom: 0.65rem;
  color: #12bca2;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.recipe-header h1 {
  margin: 0;
  color: #172521;
  font-size: clamp(1.8rem, 5vw, 2.35rem);
  font-weight: 700;
  letter-spacing: -0.04em;
}

.recipe-header p {
  margin: 0.65rem 0 0;
  color: #687873;
  line-height: 1.6;
}

.recipe-form {
  display: grid;
  gap: 1.2rem;
  max-width: none;
  margin: 0;
  padding: 0;
  border-radius: 0;
  background: transparent;
}

.form-field {
  display: grid;
  gap: 0.5rem;
}

.form-field label {
  color: #263a35;
  font-size: 0.9rem;
  font-weight: 700;
}

.form-field input,
.form-field textarea {
  box-sizing: border-box;
  width: 100%;
  min-height: 3rem;
  margin: 0;
  padding: 0.75rem 0.9rem;
  border: 1px solid #d5e0dc;
  border-radius: 0.65rem;
  outline: none;
  background: #fbfdfc;
  color: #172521;
  font: inherit;
  transition: border-color 160ms ease, box-shadow 160ms ease,
    background 160ms ease;
}

.form-field textarea {
  min-height: 8rem;
  resize: vertical;
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: #98a6a1;
}

.form-field input:focus,
.form-field textarea:focus {
  border-color: #12bca2;
  background: #fff;
  box-shadow: 0 0 0 4px rgba(18, 188, 162, 0.14);
}

.recipe-submit {
  width: 100%;
  min-height: 3.1rem;
  margin: 0.3rem 0 0;
  padding: 0.75rem 1rem;
  border: 0;
  border-radius: 0.7rem;
  background: #12bca2;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  transition: background 160ms ease, transform 160ms ease, box-shadow 160ms ease;
}

.recipe-submit:hover {
  transform: translateY(-1px);
  background: #0e907c;
  box-shadow: 0 0.5rem 1rem rgba(18, 169, 145, 0.2);
}

.recipe-submit:focus-visible {
  outline: 3px solid rgba(18, 188, 162, 0.35);
  outline-offset: 3px;
}

.error {
  margin: 0;
  color: #b42318;
  font-size: 0.9rem;
}
</style>
