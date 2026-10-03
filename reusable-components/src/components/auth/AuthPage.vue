<template>
  <div class="auth-page">
    <!-- Authenticated State -->
    <div v-if="isAuthenticated" class="auth-page__profile">
      <NxCard title="User Profile" subtitle="Authenticated with Firebase Authentication" icon="user">
        <template #actions>
          <NxBadge label="Authenticated" tone="success" dot />
        </template>

        <div class="profile-card">
          <div class="profile-card__avatar">
            <NxAvatar
              :name="user?.displayName || user?.email || 'User'"
              :src="user?.photoURL || ''"
              shape="circle"
              status="online"
              ring
              size="lg"
            />
          </div>

          <div class="profile-card__info">
            <h3 class="profile-card__name">{{ user?.displayName || "Anonymous User" }}</h3>
            <p class="profile-card__email">{{ user?.email }}</p>
            <div class="profile-card__badges">
              <NxBadge
                :label="user?.emailVerified ? 'Email Verified' : 'Email Unverified'"
                :tone="user?.emailVerified ? 'success' : 'warn'"
              />
              <NxBadge
                :label="providerLabel"
                tone="neutral"
              />
            </div>
          </div>
        </div>

        <NxDivider line-style="dashed" />

        <div class="profile-card__details">
          <div class="detail-row">
            <span class="detail-label">User ID (UID):</span>
            <code class="detail-value">{{ user?.uid }}</code>
          </div>
          <div class="detail-row">
            <span class="detail-label">Auth Provider:</span>
            <span class="detail-value">{{ providerId }}</span>
          </div>
        </div>

        <template #footer>
          <div class="profile-card__footer">
            <NxButton
              variant="danger"
              label="Sign Out"
              icon="lock"
              :loading="loading"
              @click="logout"
            />
          </div>
        </template>
      </NxCard>
    </div>

    <!-- Unauthenticated State (Login / Register Tabs) -->
    <div v-else class="auth-page__forms">
      <!-- Tabs Switcher -->
      <div class="auth-page__tabs">
        <button
          type="button"
          class="auth-tab"
          :class="{ 'auth-tab--active': activeTab === 'login' }"
          @click="activeTab = 'login'"
        >
          Sign In
        </button>
        <button
          type="button"
          class="auth-tab"
          :class="{ 'auth-tab--active': activeTab === 'register' }"
          @click="activeTab = 'register'"
        >
          Create Account
        </button>
      </div>

      <!-- Login View -->
      <LoginForm
        v-if="activeTab === 'login'"
        @switch-to-register="activeTab = 'register'"
      />

      <!-- Register View -->
      <RegisterForm
        v-else
        @switch-to-login="activeTab = 'login'"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import NxCard from "../ui/NxCard.vue";
import NxAvatar from "../ui/NxAvatar.vue";
import NxBadge from "../ui/NxBadge.vue";
import NxButton from "../ui/NxButton.vue";
import NxDivider from "../ui/NxDivider.vue";
import LoginForm from "./LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";
import { useAuth } from "@/composables/useAuth";

const { user, isAuthenticated, loading, logout } = useAuth();

const activeTab = ref("login");

const providerId = computed(() => {
  const provider = user.value?.providerData?.[0]?.providerId;
  return provider || "password";
});

const providerLabel = computed(() => {
  if (providerId.value === "google.com") return "Google Provider";
  if (providerId.value === "password") return "Email & Password";
  return providerId.value;
});
</script>

<style scoped>
.auth-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
  width: 100%;
}

.auth-page__profile {
  max-width: 520px;
  width: 100%;
}

.profile-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px 0;
}

.profile-card__info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
}

.profile-card__name {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--nx-ink);
}

.profile-card__email {
  margin: 0;
  font-size: 0.9rem;
  color: var(--nx-muted);
}

.profile-card__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
}

.profile-card__details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0;
  text-align: left;
}

.detail-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: var(--nx-fs-xs);
}

.detail-label {
  font-weight: 700;
  color: var(--nx-muted);
  min-width: 110px;
}

.detail-value {
  font-family: var(--nx-font-mono);
  background: var(--nx-surface-3);
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid var(--nx-line-soft);
  word-break: break-all;
}

.profile-card__footer {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.auth-page__forms {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.auth-page__tabs {
  display: inline-flex;
  padding: 4px;
  background: var(--nx-surface);
  border: 2px solid var(--nx-ink);
  box-shadow: 4px 4px 0 0 var(--nx-ink);
}

.auth-tab {
  padding: 8px 24px;
  font-family: inherit;
  font-size: var(--nx-fs-sm);
  font-weight: 800;
  color: var(--nx-ink);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color var(--nx-dur) var(--nx-ease), color var(--nx-dur) var(--nx-ease);
}

.auth-tab--active {
  background: var(--nx-ink);
  color: var(--nx-surface);
}
</style>

