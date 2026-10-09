<template>
  <button
    class="nx-button"
    :class="[classes, `nx-button--${variant}`, { 'nx-button--block': fullWidth }]"
    :style="style"
    :type="nativeType"
    :disabled="disabled || loading"
    :aria-busy="loading ? 'true' : undefined"
  >
    <span class="nx-button__content">
      <NxIcon v-if="loading" name="loader" :size="glyphSize" spin />
      <NxIcon v-else-if="icon" :name="icon" :size="glyphSize" />
      <span v-if="!square" class="nx-button__label">
        <slot>{{ label }}</slot>
      </span>
    </span>

    <NxIcon
      v-if="iconRight && !loading && !square"
      class="nx-button__trailing"
      :name="iconRight"
      :size="glyphSize"
    />

    <span v-if="badge" class="nx-button__badge">{{ badge }}</span>
  </button>
</template>

<script>
const VARIANTS = {
  solid: { bg: "var(--nx-ink)", fg: "var(--nx-surface)", border: "var(--nx-ink)" },
  outline: { bg: "transparent", fg: "var(--nx-ink)", border: "var(--nx-ink)" },
  ghost: { bg: "transparent", fg: "var(--nx-ink)", border: "transparent", noBorder: true },
  accent: { bg: "var(--nx-accent)", fg: "var(--nx-on-accent)", border: "var(--nx-ink)" },
  danger: { bg: "var(--nx-danger)", fg: "var(--nx-on-accent)", border: "var(--nx-ink)" },
  link: {
    bg: "transparent",
    fg: "var(--nx-accent)",
    border: "transparent",
    noBorder: true,
    flush: true,
  },
};
</script>

<script setup>
import { computed } from "vue";
import NxIcon from "./NxIcon.vue";
import { useBox, useVisuals } from "@/composables/useVisuals";
import { visualProps } from "@/config/visualProps";

const GLYPH_SIZES = { xs: 13, sm: 15, md: 17, lg: 20, xl: 24 };
const SQUARE_SIZES = { xs: 26, sm: 32, md: 40, lg: 50, xl: 62 };

const props = defineProps({
  ...visualProps,
  label: { type: String, default: "Button" },
  variant: {
    type: String,
    default: "outline",
    validator: (value) => Object.keys(VARIANTS).includes(value),
  },
  icon: { type: String, default: "" },
  iconRight: { type: String, default: "" },
  badge: { type: String, default: "" },
  nativeType: { type: String, default: "button" },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  /** Square icon-only button. */
  square: { type: Boolean, default: false },
});

const variantConfig = computed(() => VARIANTS[props.variant] || VARIANTS.outline);

const { vars, classes } = useVisuals(props, {
  base: () => variantConfig.value,
});

const box = useBox(props);

const squareSize = computed(() => SQUARE_SIZES[props.size] || SQUARE_SIZES.md);
const glyphSize = computed(() => GLYPH_SIZES[props.size] || GLYPH_SIZES.md);

const style = computed(() => {
  const merged = { ...vars.value, ...box.value };
  if (variantConfig.value.noBorder && props.borderWidth === null) merged["--c-bd-w"] = "0px";
  if (variantConfig.value.flush && props.padX === null) merged["--c-px"] = "0px";
  if (props.square) {
    merged["--c-px"] = "0px";
    merged["--c-py"] = "0px";
    merged["--c-square"] = `${squareSize.value}px`;
  }
  return merged;
});
</script>

<style scoped>
.nx-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--nx-ctl-gap);
  min-height: var(--c-square, auto);
  min-width: var(--c-square, auto);
  padding: var(--c-py, var(--nx-ctl-pad-y)) var(--c-px, var(--nx-ctl-pad-x));
  font-family: inherit;
  font-size: var(--c-font-size, var(--nx-ctl-font));
  font-weight: var(--c-weight, 800);
  line-height: var(--c-lh, 1.1);
  letter-spacing: var(--c-track, 0.015em);
  background-color: var(--c-bg);
  color: var(--c-fg);
  border: var(--c-bd-w, var(--nx-ctl-border)) var(--c-bd-style, solid) var(--c-bd);
  border-radius: var(--c-radius, var(--nx-ctl-radius));
  backdrop-filter: var(--c-backdrop, none);
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.nx-button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.nx-button--block {
  width: 100%;
}

.nx-button__content {
  display: inline-flex;
  align-items: center;
  gap: var(--nx-ctl-gap);
  min-width: 0;
}

.nx-button__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.nx-button__badge {
  position: absolute;
  top: -0.55em;
  right: -0.55em;
  min-width: 1.35em;
  padding: 0 0.3em;
  font-size: 0.7em;
  font-weight: 800;
  line-height: 1.35em;
  text-align: center;
  color: var(--nx-on-accent);
  background: var(--c-accent);
  border: 2px solid var(--nx-ink);
  border-radius: 999px;
}

/* Default hover tint per variant - effect classes layer on top. */
.nx-button--solid:hover:not(:disabled) {
  background-color: var(--c-hover-bg, var(--nx-surface));
  color: var(--c-hover-fg, var(--nx-ink));
}

.nx-button--outline:hover:not(:disabled),
.nx-button--ghost:hover:not(:disabled) {
  background-color: var(--c-hover-bg, var(--nx-ink));
  color: var(--c-hover-fg, var(--nx-surface));
}

.nx-button--accent:hover:not(:disabled),
.nx-button--danger:hover:not(:disabled) {
  background-color: var(--c-hover-bg, var(--nx-ink));
  color: var(--c-hover-fg, var(--nx-surface));
}

.nx-button--link:hover:not(:disabled) {
  background-color: var(--c-hover-bg, var(--nx-accent-3));
  color: var(--c-hover-fg, var(--nx-ink));
}
</style>
