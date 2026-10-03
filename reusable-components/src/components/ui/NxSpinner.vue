<template>
  <div
    class="nx-spinner"
    :class="[classes, `nx-spinner--${variant}`]"
    :style="style"
    role="status"
    :aria-label="label || 'Loading'"
  >
    <span class="nx-spinner__stage">
      <span v-if="variant === 'ring'" class="nx-spinner__ring" />
      <template v-else-if="variant === 'dots'">
        <span
          v-for="dot in 3"
          :key="dot"
          class="nx-spinner__dot"
          :style="{ animationDelay: (dot - 1) * 140 + 'ms' }"
        />
      </template>
      <template v-else-if="variant === 'bars'">
        <span
          v-for="bar in 4"
          :key="bar"
          class="nx-spinner__bar"
          :style="{ animationDelay: (bar - 1) * 120 + 'ms' }"
        />
      </template>
      <span v-else class="nx-spinner__pulse" />
    </span>

    <span v-if="label && showLabel" class="nx-spinner__label">{{ label }}</span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useBox, useVisuals } from "@/composables/useVisuals";
import { visualProps } from "@/config/visualProps";

const SIZE_SCALE = { xs: 14, sm: 18, md: 24, lg: 34, xl: 46 };

const props = defineProps({
  ...visualProps,
  variant: { type: String, default: "ring" },
  label: { type: String, default: "" },
  showLabel: { type: Boolean, default: true },
  thickness: { type: Number, default: 3 },
  speed: { type: Number, default: 800 },
});

const { vars, classes } = useVisuals(props, {
  base: {
    bg: "transparent",
    fg: "var(--nx-ink)",
    border: "var(--nx-accent)",
    accent: "var(--nx-accent)",
  },
});

const box = useBox(props);

const scale = computed(() => SIZE_SCALE[props.size] || SIZE_SCALE.md);

const style = computed(() => ({
  ...vars.value,
  ...box.value,
  "--c-spin-size": `${scale.value}px`,
  "--c-spin-width": `${props.thickness}px`,
  "--c-spin-dur": `${props.speed}ms`,
}));
</script>

<style scoped>
.nx-spinner {
  display: inline-flex;
  align-items: center;
  gap: var(--nx-ctl-gap);
  color: var(--c-fg);
  filter: var(--c-filter);
  transform: var(--c-transform);
  opacity: var(--c-opacity);
  mix-blend-mode: var(--c-blend);
}

.nx-spinner__stage {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  width: var(--c-spin-size);
  height: var(--c-spin-size);
}

.nx-spinner__ring {
  width: 100%;
  height: 100%;
  border: var(--c-spin-width) solid var(--c-bd);
  border-top-color: transparent;
  border-radius: var(--c-radius, 999px);
  animation: nx-spin var(--c-spin-dur) linear infinite;
  box-shadow: var(--c-shadow);
}

.nx-spinner__dot {
  width: calc(var(--c-spin-size) * 0.28);
  height: calc(var(--c-spin-size) * 0.28);
  background: var(--c-accent);
  border: 2px solid var(--c-bd);
  border-radius: 999px;
  animation: nx-bounce-dot var(--c-spin-dur) var(--nx-ease) infinite;
}

.nx-spinner__bar {
  width: calc(var(--c-spin-size) * 0.16);
  height: 100%;
  background: var(--c-accent);
  border: 2px solid var(--c-bd);
  animation: nx-stretch var(--c-spin-dur) var(--nx-ease) infinite;
}

.nx-spinner__pulse {
  width: 100%;
  height: 100%;
  background: var(--c-accent);
  border: var(--c-spin-width) solid var(--c-bd);
  animation: nx-pulse var(--c-spin-dur) var(--nx-ease) infinite;
}

.nx-spinner__label {
  font-size: var(--nx-fs-xs);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

@keyframes nx-spin {
  to {
    rotate: 360deg;
  }
}

@keyframes nx-bounce-dot {
  0%,
  100% {
    translate: 0 0;
  }
  50% {
    translate: 0 -30%;
  }
}

@keyframes nx-stretch {
  0%,
  100% {
    scale: 1 0.5;
  }
  50% {
    scale: 1 1;
  }
}
</style>
