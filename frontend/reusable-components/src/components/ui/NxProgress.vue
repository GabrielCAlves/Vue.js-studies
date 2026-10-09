<template>
  <div class="nx-progress" :class="classes" :style="style">
    <div v-if="label || showValue" class="nx-progress__meta">
      <span class="nx-progress__label">{{ label }}</span>
      <span v-if="showValue" class="nx-progress__value">
        {{ indeterminate ? statusText : percentLabel }}
      </span>
    </div>

    <div class="nx-progress__track" :class="{ 'nx-progress__track--striped': striped }">
      <div
        class="nx-progress__bar"
        :class="{ 'nx-progress__bar--indeterminate': indeterminate }"
        :style="barStyle"
      />
      <span v-for="notch in notches" :key="notch" class="nx-progress__notch" :style="{ left: notch + '%' }" />
    </div>

    <div v-if="marks" class="nx-progress__marks">
      <span>0{{ unit }}</span>
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
  value: { type: Number, default: 40 },
  max: { type: Number, default: 100 },
  label: { type: String, default: "" },
  unit: { type: String, default: "%" },
  statusText: { type: String, default: "Working" },
  showValue: { type: Boolean, default: true },
  striped: { type: Boolean, default: false },
  indeterminate: { type: Boolean, default: false },
  ticks: { type: Number, default: 0 },
  marks: { type: Boolean, default: false },
});

const { vars, classes } = useVisuals(props, {
  base: {
    bg: "var(--nx-surface-3)",
    fg: "var(--nx-ink)",
    border: "var(--nx-ink)",
    accent: "var(--nx-accent)",
  },
});

const box = useBox(props);

const clamped = computed(() => Math.min(Math.max(props.value, 0), props.max));
const ratio = computed(() => (props.max > 0 ? clamped.value / props.max : 0));
const percentLabel = computed(() => `${Math.round(ratio.value * 100)}${props.unit}`);

const notches = computed(() => {
  const count = Math.max(0, Math.floor(props.ticks));
  if (!count) return [];
  return Array.from({ length: count }, (unused, index) => ((index + 1) * 100) / (count + 1));
});

const barStyle = computed(() => ({
  width: props.indeterminate ? "38%" : `${ratio.value * 100}%`,
}));

const style = computed(() => ({
  ...vars.value,
  ...box.value,
  "--c-bar": props.indeterminate ? "var(--c-accent)" : "var(--c-accent)",
}));
</script>

<style scoped>
.nx-progress {
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: var(--c-fg);
}

.nx-progress__meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--nx-sp-3);
}

.nx-progress__label {
  font-size: var(--nx-fs-xs);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.nx-progress__value {
  font-family: var(--nx-font-mono);
  font-size: var(--nx-fs-2xs);
}

.nx-progress__track {
  position: relative;
  display: flex;
  align-items: stretch;
  height: var(--c-height, calc(var(--nx-ctl-pad-y) * 1.6));
  overflow: hidden;
  background-color: var(--c-bg);
  border: var(--c-bd-w, var(--nx-ctl-border)) var(--c-bd-style, solid) var(--c-bd);
  border-radius: var(--c-radius, var(--nx-ctl-radius));
  filter: var(--c-filter);
  box-shadow: var(--c-shadow);
  transform: var(--c-transform);
  opacity: var(--c-opacity);
}

.nx-progress__track--striped {
  background-image: repeating-linear-gradient(
    45deg,
    var(--nx-grid-line) 0 6px,
    transparent 6px 12px
  );
}

.nx-progress__bar {
  height: 100%;
  min-width: 0;
  background-color: var(--c-bar);
  border-right: 2px solid var(--c-bd);
  transition: width var(--nx-dur-slow) var(--nx-ease);
}

.nx-progress__bar--indeterminate {
  animation: nx-indeterminate 1400ms var(--nx-ease) infinite;
}

.nx-progress__notch {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--c-bd);
  opacity: 0.4;
}

.nx-progress__marks {
  display: flex;
  justify-content: space-between;
  font-family: var(--nx-font-mono);
  font-size: var(--nx-fs-2xs);
  color: var(--c-muted);
}

@keyframes nx-indeterminate {
  0% {
    translate: -40% 0;
  }
  100% {
    translate: 300% 0;
  }
}
</style>
