<template>
  <div
    class="nx-divider"
    :class="[classes, `nx-divider--${orientation}`, `nx-divider--${lineStyle}`]"
    :style="style"
    role="separator"
    :aria-orientation="orientation"
  >
    <span v-if="label && orientation === 'horizontal'" class="nx-divider__label">
      <NxIcon v-if="icon" :name="icon" :size="glyphSize" />
      {{ label }}
    </span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import NxIcon from "./NxIcon.vue";
import { useBox, useVisuals } from "@/composables/useVisuals";
import { visualProps } from "@/config/visualProps";

const GLYPH_SIZES = { xs: 12, sm: 13, md: 14, lg: 16, xl: 18 };

const props = defineProps({
  ...visualProps,
  label: { type: String, default: "" },
  icon: { type: String, default: "" },
  orientation: { type: String, default: "horizontal" },
  lineStyle: { type: String, default: "solid" },
  spacing: { type: Number, default: null },
});

const { vars, classes } = useVisuals(props, {
  base: {
    bg: "transparent",
    fg: "var(--nx-muted)",
    border: "var(--nx-line)",
    accent: "var(--nx-accent)",
  },
});

const box = useBox(props);

const style = computed(() => ({
  ...vars.value,
  ...box.value,
  "--c-gap": props.spacing === null ? "var(--nx-sp-5)" : `${props.spacing}px`,
}));

const glyphSize = computed(() => GLYPH_SIZES[props.size] || GLYPH_SIZES.md);
</script>

<style scoped>
.nx-divider {
  display: flex;
  align-items: center;
  gap: var(--nx-sp-3);
  color: var(--c-fg);
  font-size: var(--nx-fs-xs);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  filter: var(--c-filter);
  opacity: var(--c-opacity);
  transform: var(--c-transform);
}

.nx-divider--horizontal {
  width: 100%;
  margin: var(--c-gap) 0;
}

.nx-divider--horizontal::before,
.nx-divider--horizontal::after {
  content: "";
  flex: 1 1 auto;
  height: 0;
  border-top-width: var(--c-bd-w, 2px);
  border-top-style: var(--c-bd-style, solid);
  border-top-color: var(--c-bd);
}

.nx-divider--horizontal .nx-divider__label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: none;
  padding: 0 2px;
}

.nx-divider--vertical {
  flex-direction: column;
  align-self: stretch;
  min-height: 24px;
  margin: 0 var(--c-gap);
}

.nx-divider--vertical::before,
.nx-divider--vertical::after {
  content: "";
  flex: 1 1 auto;
  width: 0;
  border-left-width: var(--c-bd-w, 2px);
  border-left-style: var(--c-bd-style, solid);
  border-left-color: var(--c-bd);
}

.nx-divider--dashed::before,
.nx-divider--dashed::after {
  border-top-style: dashed;
  border-left-style: dashed;
}

.nx-divider--dotted::before,
.nx-divider--dotted::after {
  border-top-style: dotted;
  border-left-style: dotted;
}

.nx-divider--double::before,
.nx-divider--double::after {
  border-top-style: double;
  border-top-width: calc(var(--c-bd-w, 2px) * 2);
  border-left-style: double;
  border-left-width: calc(var(--c-bd-w, 2px) * 2);
}

.nx-divider--none::before,
.nx-divider--none::after {
  border: 0;
}
</style>
