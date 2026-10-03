<template>
  <span
    class="nx-avatar"
    :class="[classes, `nx-avatar--${shape}`, `nx-avatar--${sizeLabel}`]"
    :style="style"
  >
    <img
      v-if="src && !failed"
      class="nx-avatar__image"
      :src="src"
      :alt="altText"
      @error="failed = true"
    />
    <span v-else class="nx-avatar__initials">{{ resolvedInitials }}</span>

    <span v-if="status !== 'none'" class="nx-avatar__status" :class="`nx-avatar__status--${status}`" />
    <span v-if="$slots.badge" class="nx-avatar__badge"><slot name="badge" /></span>
  </span>
</template>

<script setup>
import { computed, ref } from "vue";
import { useBox, useVisuals } from "@/composables/useVisuals";
import { visualProps } from "@/config/visualProps";

const SIZE_SCALE = { xs: 28, sm: 36, md: 46, lg: 60, xl: 78 };

const props = defineProps({
  ...visualProps,
  src: { type: String, default: "" },
  name: { type: String, default: "" },
  initials: { type: String, default: "" },
  shape: { type: String, default: "square" },
  status: { type: String, default: "none" },
  ring: { type: Boolean, default: false },
});

const failed = ref(false);

const { vars, classes } = useVisuals(props, {
  base: {
    bg: "var(--nx-surface-3)",
    fg: "var(--nx-ink)",
    border: "var(--nx-ink)",
    accent: "var(--nx-accent)",
  },
});

const box = useBox(props);

const sizeLabel = computed(() => (SIZE_SCALE[props.size] ? props.size : "md"));

const resolvedInitials = computed(() => {
  if (props.initials) return props.initials.slice(0, 2).toUpperCase();
  const parts = String(props.name || "").trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "?";
  const first = parts[0].charAt(0);
  const last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : "";
  return `${first}${last}`.toUpperCase();
});

const altText = computed(() => props.name || props.alt || "Avatar");

const style = computed(() => ({
  ...vars.value,
  ...box.value,
  "--c-avatar": `${SIZE_SCALE[sizeLabel.value]}px`,
  "--c-avatar-ring": props.ring ? `0 0 0 3px ${vars.value["--c-accent"]}` : "none",
}));
</script>

<style scoped>
.nx-avatar {
  position: relative;
  display: inline-grid;
  place-items: center;
  flex: none;
  width: var(--c-avatar);
  height: var(--c-avatar);
  color: var(--c-fg);
  background-color: var(--c-bg);
  border: var(--c-bd-w, var(--nx-ctl-border)) var(--c-bd-style, solid) var(--c-bd);
  border-radius: var(--c-radius, 0);
  box-shadow: var(--c-avatar-ring), var(--c-shadow);
  filter: var(--c-filter);
  transform: var(--c-transform);
  opacity: var(--c-opacity);
  overflow: visible;
}

.nx-avatar--round {
  border-radius: var(--c-radius, 999px);
}

.nx-avatar--squircle {
  border-radius: var(--c-radius, 34%);
}

.nx-avatar__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}

.nx-avatar__initials {
  font-size: calc(var(--c-avatar) * 0.38);
  font-weight: 800;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.nx-avatar__status {
  position: absolute;
  right: -3px;
  bottom: -3px;
  width: calc(var(--c-avatar) * 0.28);
  height: calc(var(--c-avatar) * 0.28);
  min-width: 10px;
  min-height: 10px;
  border: 2px solid var(--c-bd);
  border-radius: 999px;
  background: var(--nx-muted);
}

.nx-avatar__status--online {
  background: var(--nx-success);
}

.nx-avatar__status--busy {
  background: var(--nx-danger);
}

.nx-avatar__status--away {
  background: var(--nx-warn);
}

.nx-avatar__badge {
  position: absolute;
  top: -6px;
  left: -6px;
}
</style>
