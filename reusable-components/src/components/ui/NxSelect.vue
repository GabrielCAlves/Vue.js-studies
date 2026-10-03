<template>
  <label class="nx-select" :class="[classes, { 'nx-select--invalid': hasError }]" :style="style">
    <span v-if="label || hint || error" class="nx-select__meta">
      <span class="nx-select__label">{{ label }}</span>
      <span v-if="hasError" class="nx-select__hint nx-select__hint--error">{{ error }}</span>
      <span v-else-if="hint" class="nx-select__hint">{{ hint }}</span>
    </span>

    <span class="nx-select__shell">
      <select
        class="nx-select__field"
        :value="modelValue"
        :disabled="disabled"
        :name="name"
        @change="onChange"
      >
        <option v-if="placeholder" value="">{{ placeholder }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <NxIcon class="nx-select__arrow" name="chevron-down" :size="glyphSize" />
    </span>
  </label>
</template>

<script setup>
import { computed } from "vue";
import NxIcon from "./NxIcon.vue";
import { useBox, useVisuals } from "@/composables/useVisuals";
import { visualProps } from "@/config/visualProps";

const GLYPH_SIZES = { xs: 13, sm: 14, md: 16, lg: 18, xl: 20 };

const props = defineProps({
  ...visualProps,
  modelValue: { type: [String, Number], default: "" },
  options: { type: Array, default: () => [] },
  label: { type: String, default: "" },
  hint: { type: String, default: "" },
  error: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  name: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
  invalid: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue", "change"]);

const { vars, classes } = useVisuals(props, {
  base: {
    bg: "var(--nx-surface-2)",
    fg: "var(--nx-ink)",
    border: "var(--nx-ink)",
    accent: "var(--nx-accent)",
  },
});

const box = useBox(props);

const style = computed(() => ({ ...vars.value, ...box.value }));
const hasError = computed(() => Boolean(props.error) || props.invalid);
const glyphSize = computed(() => GLYPH_SIZES[props.size] || GLYPH_SIZES.md);

function onChange(event) {
  emit("update:modelValue", event.target.value);
  emit("change", event.target.value);
}
</script>

<style scoped>
.nx-select {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.nx-select__meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--nx-sp-3);
}

.nx-select__label {
  font-size: var(--nx-fs-xs);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--c-fg);
}

.nx-select__hint {
  font-size: var(--nx-fs-xs);
  color: var(--c-muted);
}

.nx-select__hint--error {
  font-weight: 700;
  color: var(--c-accent);
}

.nx-select__shell {
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--c-bg);
  color: var(--c-fg);
  border: var(--c-bd-w, var(--nx-ctl-border)) var(--c-bd-style, solid) var(--c-bd);
  border-radius: var(--c-radius, var(--nx-ctl-radius));
  backdrop-filter: var(--c-backdrop, none);
}

.nx-select__shell:focus-within {
  box-shadow: 0 0 0 3px var(--c-accent);
}

.nx-select--invalid .nx-select__shell {
  border-color: var(--c-accent);
}

.nx-select__field {
  flex: 1 1 auto;
  width: 100%;
  padding: var(--c-py, calc(var(--nx-ctl-pad-y) * 0.6)) calc(var(--c-px, var(--nx-ctl-pad-x)) + 22px)
    var(--c-py, calc(var(--nx-ctl-pad-y) * 0.6)) var(--c-px, var(--nx-ctl-pad-x));
  font-family: inherit;
  font-size: var(--c-font-size, var(--nx-ctl-font));
  color: inherit;
  background: none;
  border: 0;
  outline: none;
  appearance: none;
  cursor: pointer;
}

.nx-select__arrow {
  position: absolute;
  right: 8px;
  pointer-events: none;
  color: var(--c-fg);
}
</style>
