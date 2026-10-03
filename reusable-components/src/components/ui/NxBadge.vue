<template>
  <span
    class="nx-badge"
    :class="[classes, `nx-badge--${tone}`, { 'nx-badge--pill': pill }]"
    :style="style"
  >
    <span v-if="dot" class="nx-badge__dot" />
    <NxIcon v-else-if="icon" :name="icon" :size="glyphSize" />
    <span class="nx-badge__text"><slot>{{ label }}</slot></span>
    <button
      v-if="removable"
      class="nx-badge__close"
      type="button"
      aria-label="Remove"
      @click="$emit('remove')"
    >
      <NxIcon name="close" :size="glyphSize - 2" />
    </button>
  </span>
</template>

<script>
const TONES = {
  neutral: { bg: "var(--nx-surface-3)", fg: "var(--nx-ink)", border: "var(--nx-ink)" },
  accent: { bg: "var(--nx-accent)", fg: "var(--nx-on-accent)", border: "var(--nx-ink)" },
  info: { bg: "var(--nx-info)", fg: "var(--nx-on-accent)", border: "var(--nx-ink)" },
  success: { bg: "var(--nx-success)", fg: "var(--nx-on-accent)", border: "var(--nx-ink)" },
  warn: { bg: "var(--nx-warn)", fg: "var(--nx-on-accent)", border: "var(--nx-ink)" },
  danger: { bg: "var(--nx-danger)", fg: "var(--nx-on-accent)", border: "var(--nx-ink)" },
  outline: { bg: "transparent", fg: "var(--nx-ink)", border: "var(--nx-ink)" },
};
</script>

<script setup>
import { computed } from "vue";
import NxIcon from "./NxIcon.vue";
import { useBox, useVisuals } from "@/composables/useVisuals";
import { visualProps } from "@/config/visualProps";

const GLYPH_SIZES = { xs: 11, sm: 12, md: 13, lg: 15, xl: 17 };

const props = defineProps({
  ...visualProps,
  label: { type: String, default: "Badge" },
  tone: {
    type: String,
    default: "accent",
    validator: (value) => Object.keys(TONES).includes(value),
  },
  icon: { type: String, default: "" },
  dot: { type: Boolean, default: false },
  pill: { type: Boolean, default: true },
  removable: { type: Boolean, default: false },
});

defineEmits(["remove"]);

const { vars, classes } = useVisuals(props, {
  base: () => TONES[props.tone] || TONES.accent,
});

const box = useBox(props);

const style = computed(() => ({ ...vars.value, ...box.value }));
const glyphSize = computed(() => GLYPH_SIZES[props.size] || GLYPH_SIZES.md);
</script>

<style scoped>
.nx-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: var(--c-py, calc(var(--nx-ctl-pad-y) * 0.35)) var(--c-px, calc(var(--nx-ctl-pad-x) * 0.6));
  font-size: var(--c-font-size, calc(var(--nx-ctl-font) * 0.86));
  font-weight: var(--c-weight, 800);
  line-height: 1.25;
  letter-spacing: var(--c-track, 0.04em);
  text-transform: uppercase;
  background-color: var(--c-bg);
  color: var(--c-fg);
  border: var(--c-bd-w, 2px) var(--c-bd-style, solid) var(--c-bd);
  border-radius: var(--c-radius, 0);
  backdrop-filter: var(--c-backdrop, none);
  white-space: nowrap;
}

.nx-badge--pill {
  border-radius: var(--c-radius, 999px);
}

.nx-badge__dot {
  width: 0.5em;
  height: 0.5em;
  background: currentColor;
  border-radius: 999px;
}

.nx-badge__text {
  overflow: hidden;
  text-overflow: ellipsis;
}

.nx-badge__close {
  display: grid;
  place-items: center;
  padding: 0;
  margin-left: 2px;
  color: inherit;
  background: none;
  border: 0;
  cursor: pointer;
  opacity: 0.75;
}

.nx-badge__close:hover {
  opacity: 1;
}
</style>
