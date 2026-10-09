<template>
  <label
    class="nx-input"
    :class="[classes, { 'nx-input--invalid': hasError, 'nx-input--disabled': disabled }]"
    :style="style"
  >
    <span v-if="label || hint || error" class="nx-input__meta">
      <span class="nx-input__label">{{ label }}</span>
      <span v-if="hasError" class="nx-input__hint nx-input__hint--error">{{ error }}</span>
      <span v-else-if="hint" class="nx-input__hint">{{ hint }}</span>
    </span>

    <span class="nx-input__shell">
      <NxIcon v-if="icon" class="nx-input__leading" :name="icon" :size="glyphSize" />

      <input
        ref="field"
        class="nx-input__field"
        :type="inputType"
        :value="modelValue"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :maxlength="maxlength || undefined"
        :autocomplete="autocomplete"
        :aria-invalid="hasError ? 'true' : undefined"
        @input="onInput"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
        @keydown.enter="$emit('submit', $event)"
      />

      <NxIcon
        v-if="showReveal"
        class="nx-input__action"
        :name="revealed ? 'eye-off' : 'eye'"
        :size="glyphSize"
        label="Toggle value visibility"
        @click="revealed = !revealed"
      />
      <NxIcon
        v-if="clearable && modelValue"
        class="nx-input__action"
        name="close"
        :size="glyphSize"
        label="Clear field"
        @click="clear"
      />
      <slot name="trailing" />
    </span>

    <span v-if="showCount" class="nx-input__count">
      {{ String(modelValue || "").length }}<template v-if="maxlength"> / {{ maxlength }}</template>
    </span>
  </label>
</template>

<script setup>
import { computed, ref } from "vue";
import NxIcon from "./NxIcon.vue";
import { useBox, useVisuals } from "@/composables/useVisuals";
import { visualProps } from "@/config/visualProps";

const GLYPH_SIZES = { xs: 14, sm: 15, md: 17, lg: 19, xl: 22 };

const props = defineProps({
  ...visualProps,
  modelValue: { type: [String, Number], default: "" },
  label: { type: String, default: "" },
  hint: { type: String, default: "" },
  error: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  type: { type: String, default: "text" },
  name: { type: String, default: "" },
  autocomplete: { type: String, default: "off" },
  icon: { type: String, default: "" },
  invalid: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
  showCount: { type: Boolean, default: false },
  /** Renders a reveal/hide toggle and keeps the value masked. */
  password: { type: Boolean, default: false },
  maxlength: { type: Number, default: null },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue", "focus", "blur", "submit", "clear"]);

const revealed = ref(false);
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

const hasError = computed(() => Boolean(props.error) || props.invalid);
const showReveal = computed(() => props.password && props.type === "password");
const glyphSize = computed(() => GLYPH_SIZES[props.size] || GLYPH_SIZES.md);

const inputType = computed(() => {
  if (!showReveal.value) return props.type;
  return revealed.value ? "text" : "password";
});

function onInput(event) {
  emit("update:modelValue", event.target.value);
}

function clear() {
  emit("update:modelValue", "");
  emit("clear");
  if (field.value) field.value.focus();
}
</script>

<style scoped>
.nx-input {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.nx-input__meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--nx-sp-3);
}

.nx-input__label {
  font-size: var(--nx-fs-xs);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--c-fg);
}

.nx-input__hint {
  font-size: var(--nx-fs-xs);
  color: var(--c-muted);
}

.nx-input__hint--error {
  font-weight: 700;
  color: var(--c-accent);
}

.nx-input__shell {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: var(--c-py, calc(var(--nx-ctl-pad-y) * 0.6)) var(--c-px, var(--nx-ctl-pad-x));
  background-color: var(--c-bg);
  color: var(--c-fg);
  border: var(--c-bd-w, var(--nx-ctl-border)) var(--c-bd-style, solid) var(--c-bd);
  border-radius: var(--c-radius, var(--nx-ctl-radius));
  backdrop-filter: var(--c-backdrop, none);
  transition: box-shadow var(--nx-dur) var(--nx-ease), border-color var(--nx-dur) var(--nx-ease);
}

.nx-input__shell:focus-within {
  box-shadow: 0 0 0 3px var(--c-accent);
}

.nx-input--invalid .nx-input__shell {
  border-color: var(--c-accent);
}

.nx-input__field {
  flex: 1 1 auto;
  min-width: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: none;
  font-size: var(--c-font-size, var(--nx-ctl-font));
  font-weight: var(--c-weight, 500);
  line-height: 1.4;
  color: inherit;
}

.nx-input__field::placeholder {
  color: var(--c-muted);
  opacity: 0.75;
}

.nx-input__leading {
  color: var(--c-muted);
}

.nx-input__action {
  color: var(--c-fg);
  cursor: pointer;
  opacity: 0.7;
}

.nx-input__action:hover {
  opacity: 1;
}

.nx-input__count {
  align-self: flex-end;
  font-family: var(--nx-font-mono);
  font-size: var(--nx-fs-2xs);
  color: var(--c-muted);
}

.nx-input--disabled {
  opacity: 0.6;
}

.nx-input--disabled .nx-input__shell {
  cursor: not-allowed;
}
</style>
