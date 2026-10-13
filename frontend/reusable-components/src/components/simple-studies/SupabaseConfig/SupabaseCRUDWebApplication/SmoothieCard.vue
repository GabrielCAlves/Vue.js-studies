<template>
  <div class="smoothie-card">
    <h3>{{ smoothie.title }}</h3>
    <p>{{ smoothie.method }}</p>
    <div class="rating">{{ smoothie.rating }}</div>
    <div class="buttons">
      <router-link :to="'/' + smoothie.id">
        <i class="material-icons">edit</i>
      </router-link>
      <i class="material-icons" v-on:click="handleDelete">delete</i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import supabase from "../../SupabaseConfig/supabaseClient";

export default defineComponent({
  name: "SmoothieCard",
  props: {
    smoothie: {
      type: Object as PropType<{
        title: string;
        method: string;
        rating: number;
        id: string;
      }>,
      required: true,
    },
    // onDelete: {
    //   type: Function as PropType<(/*id: string*/) => void>,
    //   required: true,
    // },
  },
  emits: ["reloadSmoothies"],
  setup(props, { emit }) {
    const handleDelete = async () => {
      const { data, error } = await supabase
        .from("smoothies")
        .delete()
        .eq("id", props.smoothie.id)
        .single(); // single function is used because it returns the object itself, instead of an array with a single data

      if (error) {
        console.log(error);
      }

      if (data) {
        console.log(data);
        // props.onDelete(props.smoothie.id); // Does not reload the data list, that's the reason behind the emit usage
      }

      emit("reloadSmoothies");
    };

    return { handleDelete };
  },
});
</script>

<style scoped></style>
