<template>
  <div class="auth-card">
    <NxCard title="Sign In" subtitle="Access your account using your credentials" icon="lock">
      <!-- Error Feedback -->
      <div v-if="error || localError" class="auth-card__alert">
        <NxAlert
          tone="danger"
          title="Sign In Failed"
          :message="localError || error"
          dismissible
          @dismiss="dismissError"
        />
      </div>

      <form class="auth-form" @submit.prevent="handleSubmit">
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
            placeholder="Enter your password"
            icon="lock"
            revealable
            required
            :disabled="loading"
          />
        </div>

        <div class="auth-form__actions">
          <NxButton
            type="submit"
            variant="solid"
            label="Sign In"
            icon-right="arrow-right"
            :loading="loading"
            full-width
          />
        </div>
      </form>

      <div class="auth-card__divider">
        <NxDivider label="Or continue with" line-style="dashed" />
      </div>

      <div class="auth-card__oauth">
        <NxButton
          variant="outline"
          label="Sign in with Google"
          icon="user"
          :disabled="loading"
          full-width
          @click="handleGoogleSignIn"
        />
      </div>

      <template #footer>
        <div class="auth-card__footer">
          <span>Don't have an account yet?</span>
          <NxButton
            variant="link"
            label="Create an account"
            size="sm"
            @click="$emit('switch-to-register')"
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
import NxDivider from "../ui/NxDivider.vue";
import { useAuth } from "@/composables/useAuth";

const emit = defineEmits(["switch-to-register", "success"]);

const { login, loginWithGoogle, loading, error, clearError } = useAuth();

const email = ref("");
const password = ref("");
const localError = ref("");

function dismissError() {
  localError.value = "";
  clearError();
}

async function handleSubmit() {
  dismissError();
  if (!email.value || !password.value) {
    localError.value = "Please enter both email and password.";
    return;
  }
  try {
    const user = await login(email.value, password.value);
    emit("success", user);
  } catch (err) {
    // error is already captured and formatted in useAuth
  }
}

async function handleGoogleSignIn() {
  dismissError();
  try {
    const user = await loginWithGoogle();
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
  gap: 16px;
}

.auth-form__field {
  display: flex;
  flex-direction: column;
}

.auth-form__actions {
  margin-top: 8px;
}

.auth-card__divider {
  margin: 16px 0;
}

.auth-card__oauth {
  display: flex;
  flex-direction: column;
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

