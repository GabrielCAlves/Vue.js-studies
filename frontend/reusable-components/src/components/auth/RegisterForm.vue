<template>
  <div class="auth-card">
    <NxCard title="Create Account" subtitle="Register a new profile to get started" icon="user">
      <!-- Error Feedback -->
      <div v-if="error || localError" class="auth-card__alert">
        <NxAlert
          tone="danger"
          title="Registration Failed"
          :message="localError || error"
          dismissible
          @dismiss="dismissError"
        />
      </div>

      <form class="auth-form" @submit.prevent="handleSubmit">
        <div class="auth-form__field">
          <NxInput
            v-model="displayName"
            label="Full Name"
            placeholder="Jane Doe"
            icon="user"
            :disabled="loading"
          />
        </div>

        <div class="auth-form__field">
          <NxInput
            v-model="email"
            type="email"
            label="Email Address"
            placeholder="you@example.com"
            icon="mail"
            required
            clearable
            :disabled="loading"
          />
        </div>

        <div class="auth-form__field">
          <NxInput
            v-model="password"
            type="password"
            label="Password"
            placeholder="At least 6 characters"
            icon="lock"
            revealable
            required
            hint="Minimum 6 characters"
            :disabled="loading"
          />
        </div>

        <div class="auth-form__field">
          <NxInput
            v-model="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Re-enter your password"
            icon="lock"
            revealable
            required
            :disabled="loading"
          />
        </div>

        <div class="auth-form__terms">
          <NxCheckbox
            v-model="agreed"
            label="I accept the Terms & Conditions"
            hint="Required to create an account"
            :disabled="loading"
          />
        </div>

        <div class="auth-form__actions">
          <NxButton
            type="submit"
            variant="accent"
            label="Create Account"
            icon-right="arrow-right"
            :loading="loading"
            full-width
          />
        </div>
      </form>

      <template #footer>
        <div class="auth-card__footer">
          <span>Already have an account?</span>
          <NxButton
            variant="link"
            label="Sign in instead"
            size="sm"
            @click="$emit('switch-to-login')"
          />
        </div>
      </template>
    </NxCard>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NxCard from "../ui/NxCard.vue";
import NxInput from "../ui/NxInput.vue";
import NxButton from "../ui/NxButton.vue";
import NxAlert from "../ui/NxAlert.vue";
import NxCheckbox from "../ui/NxCheckbox.vue";
import { useAuth } from "@/composables/useAuth";

const emit = defineEmits(["switch-to-login", "success"]);

const { register, loading, error, clearError } = useAuth();

const displayName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const agreed = ref(false);
const localError = ref("");

function dismissError() {
  localError.value = "";
  clearError();
}

async function handleSubmit() {
  dismissError();

  if (!email.value || !password.value) {
    localError.value = "Please provide an email and password.";
    return;
  }

  if (password.value.length < 6) {
    localError.value = "Password must be at least 6 characters long.";
    return;
  }

  if (password.value !== confirmPassword.value) {
    localError.value = "Passwords do not match. Please re-enter.";
    return;
  }

  if (!agreed.value) {
    localError.value = "You must agree to the Terms & Conditions to register.";
    return;
  }

  try {
    const user = await register(email.value, password.value, displayName.value);
    emit("success", user);
  } catch (err) {
    // error is already captured and formatted in useAuth
  }
}
</script>

<style scoped>
.auth-card {
  max-width: 440px;
  margin: 0 auto;
  width: 100%;
}

.auth-card__alert {
  margin-bottom: 16px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.auth-form__field {
  display: flex;
  flex-direction: column;
}

.auth-form__terms {
  margin-top: 4px;
}

.auth-form__actions {
  margin-top: 8px;
}

.auth-card__footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: var(--nx-fs-xs);
  color: var(--nx-muted);
  width: 100%;
}
</style>

