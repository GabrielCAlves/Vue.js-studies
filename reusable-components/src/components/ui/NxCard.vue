<template>
  <article class="nx-card" :class="[classes, { 'nx-card--interactive': interactive }]" :style="style">
    <header v-if="hasHeader" class="nx-card__head">
      <slot name="header">
        <span v-if="icon" class="nx-card__icon">
          <NxIcon :name="icon" :size="glyphSize" />
        </span>
        <span class="nx-card__heading">
          <span class="nx-card__title">{{ title }}</span>
          <span v-if="subtitle" class="nx-card__subtitle">{{ subtitle }}</span>
        </span>
      </slot>
      <div v-if="$slots.actions" class="nx-card__actions">
        <slot name="actions" />
      </div>
    </header>

    <div class="nx-card__body">
      <slot />
    </div>

    <footer v-if="$slots.footer" class="nx-card__foot">
      <slot name="footer" />
    </footer>
  </article>
</template>

<script setup>
import { computed, useSlots } from "vue";
import NxIcon from "./NxIcon.vue";
import { useBox, useVisuals } from "@/composables/useVisuals";
import { visualProps } from "@/config/visualProps";

const GLYPH_SIZES = { xs: 16, sm: 18, md: 22, lg: 26, xl: 30 };

const props = defineProps({
  ...visualProps,
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  icon: { type: String, default: "" },
  /** Adds hover affordances (cursor + effect) for clickable cards. */
  interactive: { type: Boolean, default: false },
  /** Padding for the body, independent from the size scale. */
  bodyPadding: { type: Number, default: null },
  /** Tints the header strip with the accent colour. */
  accentHeader: { type: Boolean, default: false },
});

const slots = useSlots();

const { vars, classes } = useVisuals(props, {
  base: {
    bg: "var(--nx-surface)",
    fg: "var(--nx-ink)",
    border: "var(--nx-ink)",
    accent: "var(--nx-accent)",
  },
});

const box = useBox(props);

const style = computed(() => {
  const merged = { ...vars.value, ...box.value };
  if (props.bodyPadding !== null) merged["--c-body-pad"] = `${props.bodyPadding}px`;
  if (props.accentHeader) {
    merged["--c-head-bg"] = "var(--c-accent)";
    merged["--c-head-fg"] = "var(--nx-on-accent)";
  }
  return merged;
});

const hasHeader = computed(
  () => Boolean(props.title || props.subtitle || props.icon) || Boolean(slots.header)
);

const glyphSize = computed(() => GLYPH_SIZES[props.size] || GLYPH_SIZES.md);
</script>

<style scoped>
.nx-card {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--c-bg);
  color: var(--c-fg);
  border: var(--c-bd-w, var(--nx-ctl-border)) var(--c-bd-style, solid) var(--c-bd);
  border-radius: var(--c-radius, var(--nx-ctl-radius));
  backdrop-filter: var(--c-backdrop, none);
}

.nx-card--interactive {
  cursor: pointer;
}

.nx-card--interactive:hover {
  background-color: var(--c-hover-bg, var(--c-bg));
}

.nx-card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--nx-sp-4);
  padding: var(--c-py, var(--nx-ctl-pad-y)) var(--c-px, var(--nx-ctl-pad-x));
  color: var(--c-head-fg, var(--c-fg));
  background: var(--c-head-bg, var(--nx-surface-3));
  border-bottom: var(--c-bd-w, var(--nx-ctl-border)) var(--c-bd-style, solid) var(--c-bd);
}

.nx-card__heading {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.nx-card__icon {
  display: grid;
  place-items: center;
  width: 2.2em;
  height: 2.2em;
  color: var(--c-fg);
  background: var(--c-accent);
  border: 2px solid var(--c-bd);
}

.nx-card__title {
  font-size: var(--c-font-size, var(--nx-fs-lg));
  font-weight: var(--c-weight, 800);
  line-height: var(--nx-lh-tight);
  letter-spacing: var(--c-track, 0);
}

.nx-card__subtitle {
  font-size: var(--nx-fs-xs);
  color: var(--c-muted);
}

.nx-card__head .nx-card__subtitle {
  color: inherit;
  opacity: 0.7;
}

.nx-card__actions {
  display: inline-flex;
  align-items: center;
  gap: var(--nx-sp-3);
  flex: none;
}

.nx-card__body {
  flex: 1 1 auto;
  padding: var(--c-body-pad, var(--c-py, var(--nx-ctl-pad-y)))
    var(--c-body-pad, var(--c-px, var(--nx-ctl-pad-x)));
  font-size: var(--c-font-size, var(--nx-fs-md));
  line-height: var(--c-lh, var(--nx-lh-body));
}

.nx-card__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--nx-sp-4);
  padding: var(--nx-sp-4) var(--c-px, var(--nx-ctl-pad-x));
  color: var(--nx-ink);
  background: var(--nx-surface-2);
  border-top: 2px dashed var(--c-bd);
}
</style>
