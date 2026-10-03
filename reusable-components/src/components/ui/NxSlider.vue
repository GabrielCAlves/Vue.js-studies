<template>
  <div class="nx-slider" :class="classes" :style="style">
    <div v-if="label || showValue" class="nx-slider__meta">
      <span class="nx-slider__label">{{ label }}</span>
      <span v-if="showValue" class="nx-slider__value">{{ displayValue }}</span>
    </div>

    <input
      class="nx-slider__input"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :value="modelValue"
      :disabled="disabled"
      :style="trackStyle"
      @input="onInput"
    />

    <div v-if="marks" class="nx-slider__marks">
      <span>{{ min }}{{ unit }}</span>
      <span>{{ mid }}{{ unit }}</span>
      <span>{{ max }}{{ unit }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useBox, useVisuals } from "@/composables/useVisuals";
import { visualProps } from "@/config/visualProps";

const props = defineProps({
  ...visualProps,
  modelValue: { type: Number, default: 50 },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 1 },
  label: { type: String, default: "" },
  unit: { type: String, default: "" },
  showValue: { type: Boolean, default: true },
  marks: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue", "change"]);

const { vars, classes } = useVisuals(props, {
  base: {
    bg: "transparent",
    fg: "var(--nx-ink)",
    border: "var(--nx-ink)",
    accent: "var(--nx-accent)",
  },
});

const box = useBox(props);

const percent = computed(() => {
  const span = props.max - props.min;
  if (span <= 0) return 0;
  return Math.min(Math.max(((props.modelValue - props.min) / span) * 100, 0), 100);
});

const mid = computed(() => Math.round((props.min + props.max) / 2));
const displayValue = computed(() => `${props.modelValue}${props.unit}`);

const trackStyle = computed(() => ({
  background: `linear-gradient(90deg, ${vars.value["--c-accent"]} 0%, ${vars.value["--c-accent"]} ${percent.value}%, ${vars.value["--c-muted"]} ${percent.value}%, ${vars.value["--c-muted"]} 100%)`,
}));

const style = computed(() => ({ ...vars.value, ...box.value }));

function onInput(event) {
  emit("update:modelValue", Number(event.target.value));
  emit("change", Number(event.target.value));
}
</script>

<style scoped>
.nx-slider {
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: var(--c-fg);
}

.nx-slider__meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--nx-sp-3);
}

.nx-slider__label {
  font-size: var(--nx-fs-xs);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.nx-slider__value {
  font-family: var(--nx-font-mono);
  font-size: var(--nx-fs-xs);
  padding: 1px 6px;
  border: 2px solid var(--c-bd);
  background: var(--nx-surface-2);
  color: var(--nx-ink);
}

.nx-slider__input {
  width: 100%;
  height: calc(var(--nx-ctl-pad-y) + 10px);
  margin: 0;
  appearance: none;
  background-color: var(--nx-surface-3);
  border: var(--c-bd-w, var(--nx-ctl-border)) solid var(--c-bd);
  border-radius: var(--c-radius, 0);
  cursor: pointer;
  outline: none;
  filter: var(--c-filter);
  box-shadow: var(--c-shadow);
}

.nx-slider__input::-webkit-slider-thumb {
  appearance: none;
  width: calc(var(--nx-ctl-pad-y) + 12px);
  height: calc(var(--nx-ctl-pad-y) + 12px);
  background: var(--nx-surface-2);
  border: 3px solid var(--c-bd);
  border-radius: var(--c-radius, 0);
  cursor: grab;
}

.nx-slider__input::-moz-range-thumb {
  width: calc(var(--nx-ctl-pad-y) + 12px);
  height: calc(var(--nx-ctl-pad-y) + 12px);
  background: var(--nx-surface-2);
  border: 3px solid var(--c-bd);
  border-radius: var(--c-radius, 0);
  cursor: grab;
}

.nx-slider__input:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.nx-slider__marks {
  display: flex;
  justify-content: space-between;
  font-family: var(--nx-font-mono);
  font-size: var(--nx-fs-2xs);
  color: var(--c-muted);
}
</style>
