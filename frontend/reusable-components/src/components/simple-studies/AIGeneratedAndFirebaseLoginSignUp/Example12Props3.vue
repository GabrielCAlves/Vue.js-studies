<template>
  <div class="">
    <p>My name is {{ props.name }}</p>
    <p>My age is: {{ props.age }}</p>
    <p>My favourite colors are: {{ props.favouriteColors }}</p>
    <p>I am {{ props.isAvailable ? "available" : "not available" }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "Example12Props3",
  props: {
    name: {
      type: String,
      required: true,
      default: "",
    },
    age: {
      type: Number,
      required: true,
      default: null,
    },
    favouriteColors: {
      type: Array as () => string[],
      required: true,
      default: () => [],
    },
    isAvailable: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  setup(props: any) {
    return { props };
  },
};
</script>

<style scoped>
div {
  display: grid;
  gap: 0.65rem;
  color: #493737;
  line-height: 1.55;
}

p {
  margin: 0;
  padding: 0.65rem 0.75rem;
  border-radius: 0.5rem;
  background: #fff8f7;
}

p:nth-child(even) {
  background: #fff0ef;
}
</style>
