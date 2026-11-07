<template>
  <div class="ai-study-app">
    <!-- Top Navigation Bar -->
    <nav class="app-nav">
      <div class="app-nav__brand" @click="currentView = 'showcase'">
        <NxIcon name="sliders" :size="24" stroke="3" />
        <span class="app-nav__logo">NX Kit</span>
        <NxBadge label="Vue 3 + Firebase" tone="accent" size="xs" />
      </div>

      <!-- Navigation Links -->
      <div class="app-nav__links">
        <button
          type="button"
          class="nav-tab"
          :class="{ 'nav-tab--active': currentView === 'showcase' }"
          @click="currentView = 'showcase'"
        >
          Showcase
        </button>
        <button
          type="button"
          class="nav-tab"
          :class="{ 'nav-tab--active': currentView === 'auth' }"
          @click="currentView = 'auth'"
        >
          <template v-if="isAuthenticated">My Account</template>
          <template v-else>Login / Register</template>
        </button>
      </div>

      <!-- User Status Chip -->
      <div class="app-nav__user">
        <template v-if="isAuthenticated">
          <div class="user-chip" @click="currentView = 'auth'">
            <NxAvatar
              :name="user?.displayName || user?.email || 'User'"
              :src="user?.photoURL || ''"
              shape="circle"
              status="online"
              size="xs"
            />
            <span class="user-chip__email">{{
              user?.displayName || user?.email
            }}</span>
          </div>
          <NxButton size="xs" variant="ghost" label="Logout" @click="logout" />
        </template>
        <template v-else>
          <NxButton
            size="sm"
            variant="solid"
            label="Sign In"
            icon-right="arrow-right"
            @click="currentView = 'auth'"
          />
        </template>
      </div>
    </nav>

    <!-- Main View Content -->
    <main class="app-content">
      <ComponentShowcase v-if="currentView === 'showcase'" />
      <AuthPage v-else-if="currentView === 'auth'" />
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  computed,
  watch,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

import * as NxIconModule from "../../ui/NxIcon.vue";
import * as NxBadgeModule from "../../ui/NxBadge.vue";
import * as NxAvatarModule from "../../ui/NxAvatar.vue";
import * as NxButtonModule from "../../ui/NxButton.vue";
import * as ComponentShowcaseModule from "../../ComponentShowcase.vue";
import * as AuthPageModule from "../../auth/AuthPage.vue";
import { useAuth } from "../../../composables/useAuth";

const NxIcon = (NxIconModule as any).default;
const NxBadge = (NxBadgeModule as any).default;
const NxAvatar = (NxAvatarModule as any).default;
const NxButton = (NxButtonModule as any).default;
const ComponentShowcase = (ComponentShowcaseModule as any).default;
const AuthPage = (AuthPageModule as any).default;

const currentView = ref("showcase");

const { user, isAuthenticated, logout } = useAuth();
</script>

<style scoped>
.ai-study-app {
  --nx-accent: #c62828;
  --nx-accent-2: #e85d5d;
  --nx-accent-3: #ffcece;
  --nx-danger: #c62828;
  --nx-success: #a61f24;
  --nx-on-accent: #fff;
  --nx-focus-ring: 0 0 0 3px rgba(198, 40, 40, 0.35);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: var(--nx-surface);
  border-bottom: 3px solid var(--nx-ink);
  box-shadow: 0 4px 0 0 var(--nx-line-soft);
}

.app-nav__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
}

.app-nav__logo {
  font-size: 1.25rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: var(--nx-ink);
}

.app-nav__links {
  display: inline-flex;
  gap: 4px;
  padding: 4px;
  background: var(--nx-surface-3);
  border: 2px solid var(--nx-ink);
}

.nav-tab {
  padding: 6px 16px;
  font-family: inherit;
  font-size: var(--nx-fs-xs);
  font-weight: 800;
  color: var(--nx-ink);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color var(--nx-dur) var(--nx-ease),
    color var(--nx-dur) var(--nx-ease);
}

.nav-tab--active {
  background: var(--nx-accent);
  color: var(--nx-on-accent);
}

.app-nav__user {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  background: var(--nx-surface-3);
  border: 1px solid var(--nx-ink);
  border-radius: 999px;
  cursor: pointer;
}

.user-chip__email {
  font-size: var(--nx-fs-xs);
  font-weight: 700;
  color: var(--nx-ink);
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.app-content {
  flex: 1;
}
</style>
