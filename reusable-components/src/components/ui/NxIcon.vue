<template>
  <svg
    class="nx-icon"
    :class="{ 'nx-icon--spin': spin }"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke-width="stroke"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    :role="label ? 'img' : undefined"
    :aria-label="label || undefined"
    :aria-hidden="label ? undefined : 'true'"
  >
    <template v-for="(shape, index) in shapes">
      <path v-if="shape[0] === 'path'" :key="`p${index}`" :d="shape[1]" :fill="fill" />
      <polyline
        v-else-if="shape[0] === 'polyline'"
        :key="`pl${index}`"
        :points="shape[1]"
        :fill="fill"
      />
      <line
        v-else-if="shape[0] === 'line'"
        :key="`ln${index}`"
        :x1="shape[1]"
        :y1="shape[2]"
        :x2="shape[3]"
        :y2="shape[4]"
      />
      <circle
        v-else-if="shape[0] === 'circle'"
        :key="`c${index}`"
        :cx="shape[1]"
        :cy="shape[2]"
        :r="shape[3]"
        :fill="fill"
      />
      <rect
        v-else-if="shape[0] === 'rect'"
        :key="`r${index}`"
        :x="shape[1]"
        :y="shape[2]"
        :width="shape[3]"
        :height="shape[4]"
        :rx="shape[5] || 0"
        :fill="fill"
      />
      <polygon
        v-else-if="shape[0] === 'polygon'"
        :key="`pg${index}`"
        :points="shape[1]"
        :fill="fill"
      />
    </template>
  </svg>
</template>

<script setup>
import { computed } from "vue";
import { getIconShapes } from "@/config/icons";

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 18 },
  stroke: { type: Number, default: 2 },
  /** "currentColor" fills the glyph - used by the rating stars. */
  fill: { type: String, default: "none" },
  spin: { type: Boolean, default: false },
  /** Set a label when the icon carries meaning on its own. */
  label: { type: String, default: "" },
});

const shapes = computed(() => getIconShapes(props.name));
</script>

<style scoped>
.nx-icon {
  flex: none;
  overflow: visible;
}

.nx-icon--spin {
  animation: nx-spin 900ms linear infinite;
}

@keyframes nx-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
