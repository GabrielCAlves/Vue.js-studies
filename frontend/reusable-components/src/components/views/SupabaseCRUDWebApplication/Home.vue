<template>
  <div class="page home">
    <nav>
      <h1>Supa Smoothies</h1>
      <router-link to="/supabase">Home</router-link>
      <router-link to="/create">Create New Smoothie</router-link>
    </nav>

    <div class="content">
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
            <SmoothieCard
              :smoothie="smoothie"
              @reloadSmoothies="handleDelete"
            />
            <!-- <SmoothieCard
              :smoothie="smoothie"
              :onDelete="() => handleDelete(smoothie.id)"
            />
            Does not reload the data list -->
          </div>
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&FAMILY=vt323@DISPLAY=SWAP");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

:root {
  --primary: #12bca2;
  --secondary: #6d15df;
}

.page {
  margin: 0;
  padding: 0;
  max-width: none;
  width: 100%;
}

.page .content {
  padding: 1.5rem 5rem;
}

/*================================*/
.smoothie-grid {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}

.smoothie-card {
  width: 100%;
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  border-radius: 6px;
  position: relative;
}

.smoothie-card .rating {
  position: absolute;
  top: -10px;
  right: -10px;
  background: var(--secondary);
  color: #fff;
  border-radius: 6px;
  width: 40px;
  height: 0;
  padding: 20px 0;
  line-height: 0px;
  text-align: center;
}

form {
  background: #fff;
  padding: 20px;
  max-width: 480px;
  margin: 0 auto;
  border-radius: 6px;
}

form input,
form textarea {
  display: block;
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin: 10px 0 20px 0;
}

form button {
  background: var(--primary);
  color: #fff;
  border: 0;
  border-radius: 6px;
  padding: 6px 8px;
  font-family: "Poppins";
  cursor: pointer;
}

.error {
  color: red;
}
/*=======================================*/
.smoothie-card .buttons {
  text-align: right;
}

.smoothie-card i {
  color: #bbb;
  margin-left: 10px;
  font-size: 1.2rem;
  padding: 6px;
  background: #eee;
  border-radius: 50%;
  cursor: pointer;
}
/*========================================*/
.order-by button {
  margin-left: 10px;
  background: var(--primary);
  color: #fff;
  border: 0;
  padding: 4px 8px;
  border-radius: 6px;
  font-family: "Poppins";
  cursor: pointer;
}
</style>
