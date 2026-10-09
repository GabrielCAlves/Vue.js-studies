<template>
  <label
    class="nx-toggle"
    :class="[classes, { 'nx-toggle--on': isOn, 'nx-toggle--disabled': disabled }]"
    :style="style"
  >
    <button
      class="nx-toggle__track"
      type="button"
      role="switch"
      :aria-checked="isOn ? 'true' : 'false'"
      :aria-label="label || 'Toggle'"
      :disabled="disabled"
      @click="toggle"
    >
      <span class="nx-toggle__knob">
        <NxIcon v-if="isOn && onIcon" :name="onIcon" :size="knobGlyph" />
        <NxIcon v-else-if="!isOn && offIcon" :name="offIcon" :size="knobGlyph" />
      </span>
    </button>

    <span v-if="label || hint || onLabel || offLabel" class="nx-toggle__body">
      <span class="nx-toggle__label">{{ label }}</span>
      <span v-if="stateText" class="nx-toggle__hint">{{ stateText }}</span>
    </span>
  </label>
</template>

<script setup>
import { computed } from "vue";
import NxIcon from "./NxIcon.vue";
import { useBox, useVisuals } from "@/composables/useVisuals";
import { visualProps } from "@/config/visualProps";

const SIZE_SCALE = {
  xs: { width: 30, height: 16, knob: 10 },
  sm: { width: 36, height: 20, knob: 14 },
  md: { width: 46, height: 24, knob: 18 },
  lg: { width: 56, height: 28, knob: 22 },
  xl: { width: 66, height: 34, knob: 26 },
};

const props = defineProps({
  ...visualProps,
  modelValue: { type: Boolean, default: false },
  label: { type: String, default: "" },
  hint: { type: String, default: "" },
  onLabel: { type: String, default: "" },
  offLabel: { type: String, default: "" },
  onIcon: { type: String, default: "" },
  offIcon: { type: String, default: "" },
  knobShape: { type: String, default: "round" },
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue", "change"]);

const { vars, classes } = useVisuals(props, {
  base: {
    bg: "var(--nx-surface-3)",
    fg: "var(--nx-ink)",
    border: "var(--nx-ink)",
    accent: "var(--nx-accent)",
  },
});

const box = useBox(props);

const scale = computed(() => SIZE_SCALE[props.size] || SIZE_SCALE.md);
const isOn = computed(() => Boolean(props.modelValue));
const knobGlyph = computed(() => Math.round(scale.value.knob * 0.72));

const stateText = computed(() => {
  if (isOn.value) return props.onLabel || props.hint;
  return props.offLabel || props.hint;
});

const style = computed(() => ({
  ...vars.value,
  ...box.value,
  "--c-sw-w": `${scale.value.width}px`,
  "--c-sw-h": `${scale.value.height}px`,
  "--c-sw-knob": `${scale.value.knob}px`,
  "--c-knob-radius": props.knobShape === "square" ? "0px" : "999px",
}));

function toggle() {
  if (props.disabled) return;
  emit("update:modelValue", !isOn.value);
  emit("change", !isOn.value);
}
</script>

<style scoped>
.nx-toggle {
  display: inline-flex;
  align-items: center;
  gap: var(--nx-ctl-gap);
  color: var(--c-fg);
  cursor: pointer;
}

.nx-toggle__track {
  position: relative;
  flex: none;
  width: var(--c-sw-w);
  height: var(--c-sw-h);
  padding: 2px;
  background-color: var(--c-bg);
  border: var(--c-bd-w, var(--nx-ctl-border)) var(--c-bd-style, solid) var(--c-bd);
  border-radius: var(--c-radius, 999px);
  cursor: pointer;
  transition: background-color var(--nx-dur) var(--nx-ease);
  filter: var(--c-filter);
  box-shadow: var(--c-shadow);
  transform: var(--c-transform);
  opacity: var(--c-opacity);
}

.nx-toggle--on .nx-toggle__track {
  background-color: var(--c-accent);
}

.nx-toggle__knob {
  position: absolute;
  top: 2px;
  left: 2px;
  display: grid;
  place-items: center;
  width: var(--c-sw-knob);
  height: var(--c-sw-knob);
  color: var(--c-fg);
  background: var(--c-knob-bg, var(--nx-surface-2));
  border: 2px solid var(--c-bd);
  border-radius: var(--c-knob-radius);
  transition: translate var(--nx-dur) var(--nx-ease-bounce);
}

.nx-toggle--on .nx-toggle__knob {
  translate: calc(var(--c-sw-w) - var(--c-sw-knob) - 8px) 0;
}

.nx-toggle__body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.nx-toggle__label {
  font-size: var(--c-font-size, var(--nx-ctl-font));
  font-weight: var(--c-weight, 600);
  line-height: 1.35;
}

.nx-toggle__hint {
  font-size: var(--nx-fs-xs);
  color: var(--c-muted);
}

.nx-toggle--disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.nx-toggle--disabled .nx-toggle__track {
  cursor: not-allowed;
}
</style>
