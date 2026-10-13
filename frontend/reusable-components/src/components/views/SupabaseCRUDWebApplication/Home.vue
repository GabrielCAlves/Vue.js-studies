<template>
  <div class="page home">
    <h2>Home</h2>
    {{
      fetchError == null
        ? "No errors while fetching data"
        : "Some error occurred"
    }}
    <br />
    {{ fetchError }}
    <br />
    <div class="smoothies">
      <div class="order-by">
        <p>Order by:</p>
        <button v-on:click="setOrderBy('created_at')">Time created</button>
        <button v-on:click="setOrderBy('title')">Title</button>
        <button v-on:click="setOrderBy('rating')">Rating</button>
      </div>
      <div class="smoothie-grid">
        <div v-for="smoothie in smoothies" :key="smoothie.id">
          <SmoothieCard :smoothie="smoothie" @reloadSmoothies="handleDelete" />
          <!-- <SmoothieCard
            :smoothie="smoothie"
            :onDelete="() => handleDelete(smoothie.id)"
          />
          Does not reload the data list -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import supabase from "../../simple-studies/SupabaseConfig/supabaseClient";
import SmoothieCard from "../../simple-studies/SupabaseConfig/SupabaseCRUDWebApplication/SmoothieCard.vue";

export default defineComponent({
  name: "Home",
  components: {
    SmoothieCard,
  },
  setup() {
    const fetchError = ref<string | null>(null);
    const smoothies = ref<any[] | null>(null);
    const orderBy = ref<string>("created_at");

    const handleDelete = (/*id: string*/) => {
      loadData();
      // smoothies.value = smoothies.value?.filter((sm) => sm.id !== id) ?? null;
    };

    onMounted(async () => {
      loadData();
    });

    const loadData = async () => {
      const { data, error } = await supabase
        .from("smoothies")
        .select()
        .order(orderBy.value, { ascending: false });

      if (error) {
        fetchError.value = "Could not fetch the smoothies.";
        smoothies.value = null;
        console.log(error);
      }

      if (data) {
        smoothies.value = data;
        fetchError.value = null;
      }
    };

    function setOrderBy(type: string) {
      orderBy.value = type;
      loadData();
    }

    return { fetchError, smoothies, orderBy, handleDelete, setOrderBy };
  },
});
</script>
