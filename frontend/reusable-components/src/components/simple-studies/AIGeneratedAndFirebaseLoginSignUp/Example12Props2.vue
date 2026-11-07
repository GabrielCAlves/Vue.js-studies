<template>
  <div class="">
    <h3>
      Name Info coming from Example11Props1 (This is Example12Props2):
      {{ name }}
    </h3>
    <h3>
      Age Info coming from Example11Props1 (This is Example12Props2): {{ age }}
    </h3>
    <h3>
      City Info coming from Example11Props1 (This is Example12Props2):
      {{ city }}
    </h3>
    <h3>
      Cities Info coming from Example11Props1 (This is Example12Props2):
      <ul>
        <li v-for="city1 in cities_Props2" :key="city1">{{ city1 }}</li>
      </ul>
    </h3>
    <button @click="function_Props1">Click Here</button>
  </div>
</template>

<script lang="ts">
// const props = defineProps([
//   "name",
//   "age",
//   "city",
//   "cities_Props2",
//   "function_Props1",
// ]);

export default {
  name: "Example12Props2",
  props: ["name", "age", "city", "cities_Props2", "function_Props1"],
  setup(props: any) {
    return { props };
  },
};

// ===== Props =====
// const props = defineProps<{
//   title: string
// }>()

// ===== Emits =====
// const emit = defineEmits<{
//   (e: 'update', value: string): void
// }>()
</script>

<style scoped>
div {
  color: #493737;
  line-height: 1.6;
}

h3 {
  margin: 0 0 0.7rem;
  color: #7f1d26;
  font-size: 0.95rem;
  font-weight: 600;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 0.5rem 0 1rem;
  padding: 0;
  list-style: none;
}

li {
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  background: #fff0ef;
  color: #9c252d;
  font-size: 0.85rem;
}

button {
  min-height: 2.4rem;
  padding: 0.5rem 0.8rem;
  border: 0;
  border-radius: 0.55rem;
  background: #c62828;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
}

button:hover {
  background: #a61f24;
}
</style>
