<template>
  <div
    class="nx-rating"
    :class="[classes, { 'nx-rating--readonly': readOnly }]"
    :style="style"
    role="slider"
    :tabindex="readOnly ? -1 : 0"
    :aria-valuenow="modelValue"
    aria-valuemin="0"
    :aria-valuemax="max"
    :aria-label="label || 'Rating'"
    @mouseleave="hoverValue = 0"
    @keydown.left.prevent="step(-1)"
    @keydown.right.prevent="step(1)"
    @keydown.up.prevent="step(1)"
    @keydown.down.prevent="step(-1)"
  >
    <span v-if="label" class="nx-rating__label">{{ label }}</span>

    <span class="nx-rating__items">
      <button
        v-for="slot in max"
        :key="slot"
        class="nx-rating__item"
        :class="{ 'nx-rating__item--active': slot <= displayValue }"
        type="button"
        :disabled="readOnly"
        :aria-label="`Set rating to ${slot}`"
        @mouseenter="hoverValue = slot"
        @click="select(slot)"
      >
        <NxIcon
          :name="icon"
          :size="glyphSize"
          :fill="slot <= displayValue ? 'currentColor' : 'none'"
        />
      </button>
    </span>

    <span v-if="showValue" class="nx-rating__value">
      {{ displayValue }}<span class="nx-rating__total"> / {{ max }}</span>
    </span>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import NxIcon from "./NxIcon.vue";
import { useBox, useVisuals } from "@/composables/useVisuals";
import { visualProps } from "@/config/visualProps";

const GLYPH_SIZES = { xs: 14, sm: 17, md: 21, lg: 26, xl: 32 };

const props = defineProps({
  ...visualProps,
  modelValue: { type: Number, default: 3 },
  max: { type: Number, default: 5 },
  icon: { type: String, default: "star" },
  label: { type: String, default: "" },
  showValue: { type: Boolean, default: true },
  readOnly: { type: Boolean, default: false },
  emptyColor: { type: String, default: "" },
});

const emit = defineEmits(["update:modelValue", "change"]);

const hoverValue = ref(0);

const { vars, classes } = useVisuals(props, {
  base: {
    bg: "transparent",
    fg: "var(--nx-accent)",
    border: "var(--nx-ink)",
    accent: "var(--nx-accent)",
  },
});

const box = useBox(props);

const displayValue = computed(() => hoverValue.value || props.modelValue);
const glyphSize = computed(() => GLYPH_SIZES[props.size] || GLYPH_SIZES.md);

const style = computed(() => ({
  ...vars.value,
  ...box.value,
  "--c-empty": props.emptyColor || vars.value["--c-muted"],
}));

function select(slot) {
  if (props.readOnly) return;
  emit("update:modelValue", slot);
  emit("change", slot);
}

function step(delta) {
  if (props.readOnly) return;
  const next = Math.min(Math.max(props.modelValue + delta, 0), props.max);
  emit("update:modelValue", next);
  emit("change", next);
}
</script>

<style scoped>
.nx-rating {
  display: inline-flex;
  align-items: center;
  gap: var(--nx-sp-3);
  color: var(--c-fg);
  outline-offset: 4px;
  filter: var(--c-filter);
  transform: var(--c-transform);
  opacity: var(--c-opacity);
  mix-blend-mode: var(--c-blend);
}

.nx-rating__label {
  font-size: var(--nx-fs-xs);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--c-muted);
}

.nx-rating__items {
  display: inline-flex;
  align-items: center;
  gap: 2px;
}

.nx-rating__item {
  display: grid;
  place-items: center;
  padding: 2px;
  color: var(--c-empty);
  background: none;
  border: 0;
  cursor: pointer;
  transition: color var(--nx-dur) var(--nx-ease), transform var(--nx-dur) var(--nx-ease);
}

.nx-rating__item--active {
  color: var(--c-accent);
}

.nx-rating__item:hover {
  transform: scale(1.18);
}

.nx-rating--readonly .nx-rating__item {
  cursor: default;
}

.nx-rating--readonly .nx-rating__item:hover {
  transform: none;
}

.nx-rating__value {
  font-family: var(--nx-font-mono);
  font-size: var(--nx-fs-xs);
  font-weight: 700;
}

.nx-rating__total {
  color: var(--c-muted);
}
</style>
