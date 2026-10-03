<template>
  <span
    class="nx-tooltip"
    :class="classes"
    :style="style"
    @mouseenter="open"
    @mouseleave="close"
    @focusin="open"
    @focusout="close"
  >
    <slot />
    <span
      class="nx-tooltip__bubble"
      :class="[`nx-tooltip__bubble--${placement}`, { 'nx-tooltip__bubble--open': isOpen }]"
      role="tooltip"
      :aria-hidden="isOpen ? 'false' : 'true'"
    >
      {{ content }}
    </span>
  </span>
</template>

<script setup>
import { computed, onBeforeUnmount, ref } from "vue";
import { useVisuals } from "@/composables/useVisuals";
import { visualProps } from "@/config/visualProps";

const props = defineProps({
  ...visualProps,
  content: { type: String, default: "Tooltip text" },
  placement: { type: String, default: "top" },
  delay: { type: Number, default: 120 },
  tone: { type: String, default: "ink" },
});

const isOpen = ref(false);
let timer = null;

const { vars, classes } = useVisuals(props, {
  base: {
    bg: "var(--nx-ink)",
    fg: "var(--nx-surface)",
    border: "var(--nx-ink)",
    accent: "var(--nx-accent)",
  },
});

const style = computed(() => ({
  ...vars.value,
  "--c-tip-delay": `${props.delay}ms`,
  "--c-tip-bg": vars.value["--c-bg"],
  "--c-tip-fg": vars.value["--c-fg"],
}));

function open() {
  timer = setTimeout(() => {
    isOpen.value = true;
  }, props.delay);
}

function close() {
  if (timer) clearTimeout(timer);
  timer = null;
  isOpen.value = false;
}

onBeforeUnmount(close);
</script>

<style scoped>
.nx-tooltip {
  position: relative;
  display: inline-flex;
  color: var(--c-fg);
  filter: var(--c-filter);
  opacity: var(--c-opacity);
}

.nx-tooltip__bubble {
  position: absolute;
  z-index: var(--nx-z-overlay);
  max-width: 240px;
  padding: 4px 8px;
  font-size: var(--nx-fs-xs);
  font-weight: 700;
  line-height: 1.3;
  white-space: nowrap;
  color: var(--c-tip-fg);
  background: var(--c-tip-bg);
  border: 2px solid var(--c-tip-bg);
  box-shadow: 4px 4px 0 0 var(--c-accent);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--nx-dur) var(--nx-ease), translate var(--nx-dur) var(--nx-ease);
}

.nx-tooltip__bubble--open {
  opacity: 1;
}

.nx-tooltip__bubble--top {
  bottom: calc(100% + 8px);
  left: 50%;
  translate: -50% 6px;
}

.nx-tooltip__bubble--top.nx-tooltip__bubble--open {
  translate: -50% 0;
}

.nx-tooltip__bubble--bottom {
  top: calc(100% + 8px);
  left: 50%;
  translate: -50% -6px;
}

.nx-tooltip__bubble--bottom.nx-tooltip__bubble--open {
  translate: -50% 0;
}

.nx-tooltip__bubble--left {
  right: calc(100% + 8px);
  top: 50%;
  translate: 6px -50%;
}

.nx-tooltip__bubble--left.nx-tooltip__bubble--open {
  translate: 0 -50%;
}

.nx-tooltip__bubble--right {
  left: calc(100% + 8px);
  top: 50%;
  translate: -6px -50%;
}

.nx-tooltip__bubble--right.nx-tooltip__bubble--open {
  translate: 0 -50%;
}
</style>
