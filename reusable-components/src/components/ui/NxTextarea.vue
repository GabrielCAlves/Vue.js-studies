<template>
  <label class="nx-textarea" :class="[classes, { 'nx-textarea--invalid': hasError }]" :style="style">
    <span v-if="label || hint || error" class="nx-textarea__meta">
      <span class="nx-textarea__label">{{ label }}</span>
      <span v-if="hasError" class="nx-textarea__hint nx-textarea__hint--error">{{ error }}</span>
      <span v-else-if="hint" class="nx-textarea__hint">{{ hint }}</span>
    </span>

    <span class="nx-textarea__shell">
      <textarea
        ref="field"
        class="nx-textarea__field"
        :value="modelValue"
        :rows="rows"
        :placeholder="placeholder"
        :maxlength="maxlength || undefined"
        :disabled="disabled"
        :readonly="readonly"
        :style="{ resize: resize }"
        @input="onInput"
      />
    </span>

    <span v-if="showCount || hintFooter" class="nx-textarea__footer">
      <span v-if="hintFooter" class="nx-textarea__hint">{{ hintFooter }}</span>
      <span v-if="showCount" class="nx-textarea__count">
        {{ text.length }}<template v-if="maxlength"> / {{ maxlength }}</template>
      </span>
    </span>
  </label>
</template>

<script setup>
import { computed, ref } from "vue";
import { useBox, useVisuals } from "@/composables/useVisuals";
import { visualProps } from "@/config/visualProps";

const props = defineProps({
  ...visualProps,
  modelValue: { type: String, default: "" },
  label: { type: String, default: "" },
  hint: { type: String, default: "" },
  hintFooter: { type: String, default: "" },
  error: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  rows: { type: Number, default: 4 },
  maxlength: { type: Number, default: null },
  showCount: { type: Boolean, default: false },
  resize: { type: String, default: "vertical" },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  invalid: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);

const field = ref(null);

const { vars, classes } = useVisuals(props, {
  base: {
    bg: "var(--nx-surface-2)",
    fg: "var(--nx-ink)",
    border: "var(--nx-ink)",
    accent: "var(--nx-accent)",
  },
});

const box = useBox(props);

const style = computed(() => ({ ...vars.value, ...box.value }));
const text = computed(() => String(props.modelValue || ""));
const hasError = computed(() => Boolean(props.error) || props.invalid);

function onInput(event) {
  emit("update:modelValue", event.target.value);
}

defineExpose({ focus: () => field.value && field.value.focus() });
</script>

<style scoped>
.nx-textarea {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.nx-textarea__meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--nx-sp-3);
}

.nx-textarea__label {
  font-size: var(--nx-fs-xs);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--c-fg);
}

.nx-textarea__hint {
  font-size: var(--nx-fs-xs);
  color: var(--c-muted);
}

.nx-textarea__hint--error {
  font-weight: 700;
  color: var(--c-accent);
}

.nx-textarea__shell {
  display: flex;
  padding: var(--c-py, calc(var(--nx-ctl-pad-y) * 0.6)) var(--c-px, var(--nx-ctl-pad-x));
  background-color: var(--c-bg);
  color: var(--c-fg);
  border: var(--c-bd-w, var(--nx-ctl-border)) var(--c-bd-style, solid) var(--c-bd);
  border-radius: var(--c-radius, var(--nx-ctl-radius));
  backdrop-filter: var(--c-backdrop, none);
  transition: box-shadow var(--nx-dur) var(--nx-ease);
}

.nx-textarea__shell:focus-within {
  box-shadow: 0 0 0 3px var(--c-accent);
}

.nx-textarea--invalid .nx-textarea__shell {
  border-color: var(--c-accent);
}

.nx-textarea__field {
  flex: 1 1 auto;
  width: 100%;
  min-width: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: none;
  font-family: inherit;
  font-size: var(--c-font-size, var(--nx-ctl-font));
  line-height: var(--c-lh, 1.5);
  color: inherit;
}

.nx-textarea__field::placeholder {
  color: var(--c-muted);
  opacity: 0.75;
}

.nx-textarea__footer {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--nx-sp-3);
}

.nx-textarea__count {
  margin-left: auto;
  font-family: var(--nx-font-mono);
  font-size: var(--nx-fs-2xs);
  color: var(--c-muted);
}
</style>
