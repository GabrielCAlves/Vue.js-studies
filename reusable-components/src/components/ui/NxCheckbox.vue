<template>
  <label
    class="nx-checkbox"
    :class="[classes, { 'nx-checkbox--checked': isChecked, 'nx-checkbox--disabled': disabled }]"
    :style="style"
  >
    <input
      class="nx-checkbox__input"
      type="checkbox"
      :checked="isChecked"
      :indeterminate="indeterminate"
      :disabled="disabled"
      :name="name"
      @change="onChange"
    />
    <span class="nx-checkbox__box">
      <NxIcon :name="indeterminate ? 'minus' : 'check'" :size="glyphSize" :stroke="3" />
    </span>
    <span class="nx-checkbox__body">
      <span class="nx-checkbox__label"><slot>{{ label }}</slot></span>
      <span v-if="hint" class="nx-checkbox__hint">{{ hint }}</span>
    </span>
  </label>
</template>

<script setup>
import { computed } from "vue";
import NxIcon from "./NxIcon.vue";
import { useBox, useVisuals } from "@/composables/useVisuals";
import { visualProps } from "@/config/visualProps";

const GLYPH_SIZES = { xs: 10, sm: 11, md: 13, lg: 15, xl: 18 };

const props = defineProps({
  ...visualProps,
  modelValue: { type: [Boolean, Array], default: false },
  value: { type: [String, Number], default: null },
  label: { type: String, default: "Checkbox" },
  hint: { type: String, default: "" },
  name: { type: String, default: "" },
  indeterminate: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue", "change"]);

const isArrayMode = computed(() => Array.isArray(props.modelValue));

const isChecked = computed(() => {
  if (isArrayMode.value) return props.modelValue.includes(props.value);
  return Boolean(props.modelValue);
});

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
const glyphSize = computed(() => GLYPH_SIZES[props.size] || GLYPH_SIZES.md);

function onChange() {
  if (isArrayMode.value) {
    const next = props.modelValue.slice();
    const index = next.indexOf(props.value);
    if (index === -1) next.push(props.value);
    else next.splice(index, 1);
    emit("update:modelValue", next);
    emit("change", next);
    return;
  }
  emit("update:modelValue", !props.modelValue);
  emit("change", !props.modelValue);
}
</script>

<style scoped>
.nx-checkbox {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--nx-ctl-gap);
  padding: var(--c-py, 4px) var(--c-px, 4px);
  color: var(--c-fg);
  cursor: pointer;
  border-radius: var(--c-radius, var(--nx-ctl-radius));
}

.nx-checkbox__input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}

.nx-checkbox__box {
  display: grid;
  place-items: center;
  width: var(--c-box, 1.25em);
  height: var(--c-box, 1.25em);
  flex: none;
  margin-top: 0.1em;
  font-size: var(--c-font-size, var(--nx-ctl-font));
  color: transparent;
  background-color: var(--c-bg);
  border: var(--c-bd-w, var(--nx-ctl-border)) var(--c-bd-style, solid) var(--c-bd);
  border-radius: var(--c-radius, var(--nx-ctl-radius));
  transition: background-color var(--nx-dur) var(--nx-ease), color var(--nx-dur) var(--nx-ease);
  filter: var(--c-filter);
  box-shadow: var(--c-shadow);
}

.nx-checkbox--checked .nx-checkbox__box {
  background-color: var(--c-accent);
  color: var(--nx-on-accent);
}

.nx-checkbox__input:focus-visible + .nx-checkbox__box {
  box-shadow: 0 0 0 3px var(--c-accent);
}

.nx-checkbox__body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.nx-checkbox__label {
  font-size: var(--c-font-size, var(--nx-ctl-font));
  font-weight: var(--c-weight, 600);
  line-height: 1.35;
}

.nx-checkbox__hint {
  font-size: var(--nx-fs-xs);
  color: var(--c-muted);
}

.nx-checkbox--disabled {
  opacity: 0.55;
  cursor: not-allowed;
}
</style>
