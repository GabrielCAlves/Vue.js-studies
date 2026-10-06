<!-- <template>
  <form class="board-form" novalidate @submit.prevent="emit('submit')">
    <div class="board-form__field">
      <label class="board-form__label" for="board-title">Title</label>
      <input
        id="board-title"
        class="board-form__input"
        type="text"
        :value="title"
        :disabled="saving"
        placeholder="Board title"
        @input="onTitleInput"
      />
      <p v-if="titleError" class="board-form__hint board-form__hint--error">{{ titleError }}</p>
    </div>

    <div class="board-form__field">
      <label class="board-form__label" for="board-description">Description</label>
      <textarea
        id="board-description"
        class="board-form__input board-form__input--area"
        :value="description"
        :disabled="saving"
        placeholder="Optional details about this board"
        @input="onDescriptionInput"
      />
    </div>

    <p v-if="error" class="board-form__alert">{{ error }}</p>

    <div class="board-form__actions">
      <button class="crud__btn crud__btn--primary" type="submit" :disabled="!canSubmit">
        {{ saving ? "Saving..." : submitLabel }}
      </button>
      <button class="crud__btn" type="button" :disabled="saving" @click="emit('cancel')">
        Cancel
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import "./crud.css";

defineProps<{
  title: string;
  description: string;
  submitLabel: string;
  saving: boolean;
  canSubmit: boolean;
  titleError?: string;
  error?: string | null;
}>();

const emit = defineEmits<{
  (event: "update:title", value: string): void;
  (event: "update:description", value: string): void;
  (event: "submit"): void;
  (event: "cancel"): void;
}>();

function onTitleInput(event: Event): void {
  emit("update:title", (event.target as HTMLInputElement).value);
}

function onDescriptionInput(event: Event): void {
  emit("update:description", (event.target as HTMLTextAreaElement).value);
}
</script> -->
