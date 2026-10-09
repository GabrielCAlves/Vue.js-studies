<template>
  <div class="nx-alert" :class="[classes, `nx-alert--${tone}`]" :style="style" role="alert">
    <span v-if="showIcon" class="nx-alert__icon">
      <NxIcon :name="resolvedIcon" :size="glyphSize" />
    </span>

    <div class="nx-alert__body">
      <p v-if="title" class="nx-alert__title">{{ title }}</p>
      <div class="nx-alert__message"><slot>{{ message }}</slot></div>
    </div>

    <div v-if="$slots.actions" class="nx-alert__actions"><slot name="actions" /></div>

    <button
      v-if="dismissible"
      class="nx-alert__close"
      type="button"
      aria-label="Dismiss"
      @click="$emit('dismiss')"
    >
      <NxIcon name="close" :size="glyphSize - 2" />
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import NxIcon from "./NxIcon.vue";
import { useBox, useVisuals } from "@/composables/useVisuals";
import { visualProps } from "@/config/visualProps";

const TONES = {
  neutral: { bg: "var(--nx-surface-3)", fg: "var(--nx-ink)", border: "var(--nx-ink)", icon: "info" },
  info: { bg: "var(--nx-info)", fg: "var(--nx-ink)", border: "var(--nx-ink)", icon: "info" },
  success: { bg: "var(--nx-success)", fg: "var(--nx-ink)", border: "var(--nx-ink)", icon: "check" },
  warn: { bg: "var(--nx-warn)", fg: "var(--nx-ink)", border: "var(--nx-ink)", icon: "warning" },
  danger: { bg: "var(--nx-danger)", fg: "var(--nx-on-accent)", border: "var(--nx-ink)", icon: "alert" },
};

const GLYPH_SIZES = { xs: 14, sm: 16, md: 18, lg: 20, xl: 24 };

const props = defineProps({
  ...visualProps,
  tone: { type: String, default: "info" },
  title: { type: String, default: "" },
  message: { type: String, default: "" },
  icon: { type: String, default: "" },
  showIcon: { type: Boolean, default: true },
  dismissible: { type: Boolean, default: false },
  striped: { type: Boolean, default: false },
});

defineEmits(["dismiss"]);

const { vars, classes } = useVisuals(props, {
  base: () => TONES[props.tone] || TONES.info,
});

const box = useBox(props);

const resolvedIcon = computed(() => props.icon || (TONES[props.tone] || TONES.info).icon);
const glyphSize = computed(() => GLYPH_SIZES[props.size] || GLYPH_SIZES.md);

const style = computed(() => ({ ...vars.value, ...box.value }));
</script>

<style scoped>
.nx-alert {
  display: flex;
  align-items: flex-start;
  gap: var(--nx-ctl-gap);
  padding: var(--c-py, var(--nx-ctl-pad-y)) var(--c-px, var(--nx-ctl-pad-x));
  color: var(--c-fg);
  background-color: var(--c-bg);
  border: var(--c-bd-w, var(--nx-ctl-border)) var(--c-bd-style, solid) var(--c-bd);
  border-radius: var(--c-radius, var(--nx-ctl-radius));
  backdrop-filter: var(--c-backdrop, none);
  font-size: var(--c-font-size, var(--nx-ctl-font));
  line-height: var(--c-lh, 1.5);
}

.nx-alert__icon {
  display: grid;
  place-items: center;
  flex: none;
  margin-top: 1px;
}

.nx-alert__body {
  flex: 1 1 auto;
  min-width: 0;
}

.nx-alert__title {
  margin: 0 0 2px;
  font-size: var(--c-font-size, var(--nx-ctl-font));
  font-weight: 800;
  letter-spacing: 0.01em;
}

.nx-alert__message {
  opacity: 0.92;
}

.nx-alert__actions {
  display: inline-flex;
  align-items: center;
  gap: var(--nx-sp-3);
  flex: none;
}

.nx-alert__close {
  display: grid;
  place-items: center;
  flex: none;
  padding: 2px;
  color: inherit;
  background: none;
  border: 0;
  cursor: pointer;
  opacity: 0.75;
}

.nx-alert__close:hover {
  opacity: 1;
}
</style>
