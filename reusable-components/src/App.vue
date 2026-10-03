<template>
  <div id="app">
    <!-- Top Navigation Bar -->
    <!-- <nav class="app-nav">
      <div class="app-nav__brand" @click="currentView = 'showcase'">
        <NxIcon name="sliders" :size="24" stroke="3" />
        <span class="app-nav__logo">NX Kit</span>
        <NxBadge label="Vue 3 + Firebase" tone="accent" size="xs" />
      </div> -->

    <!-- Navigation Links -->
    <!-- <div class="app-nav__links">
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
      </div> -->

    <!-- User Status Chip -->
    <!-- <div class="app-nav__user">
        <template v-if="isAuthenticated">
          <div class="user-chip" @click="currentView = 'auth'">
            <NxAvatar
              :name="user?.displayName || user?.email || 'User'"
              :src="user?.photoURL || ''"
              shape="circle"
              status="online"
              size="xs"
            />
            <span class="user-chip__email">{{ user?.displayName || user?.email }}</span>
          </div>
          <NxButton
            size="xs"
            variant="ghost"
            label="Logout"
            @click="logout"
          />
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
    </nav> -->

    <!-- Main View Content -->
    <!-- <main class="app-content">
      <ComponentShowcase v-if="currentView === 'showcase'" />
      <AuthPage v-else-if="currentView === 'auth'" />
    </main> -->

    <h4>Example01Interpolation</h4>
    <Example01Interpolation />
    <hr />
    <br />

    <h4>Example02And03Conditionals</h4>
    <Example02And03Conditionals />
    <hr />
    <br />

    <h4>Example04Loop</h4>
    <Example04Loop />
    <hr />
    <br />

    <h4>Example05HTML</h4>
    <Example05HTML />
    <hr />
    <br />

    <h4>Example06VModel</h4>
    <Example06VModel />
    <hr />
    <br />

    <h4>Example07Class</h4>
    <Example07Class />
    <hr />
    <br />

    <h4>Example08Click</h4>
    <Example08Click />
    <hr />
    <br />

    <h4>Example09Keyboard</h4>
    <Example09Keyboard />
    <hr />
    <br />

    <h4>Example10Submit</h4>
    <Example10Submit />
    <hr />
    <br />

    <h4>Example11LifeCycle</h4>
    <Example11LifeCycle />
    <hr />
    <br />

    <h4>Example12Props1</h4>
    <Example12Props1 />
    <hr />
    <br />

    <h4>Example13Routes</h4>
    <Example13Routes />
    <hr />
    <br />

    <h4>Example14Requisitions</h4>
    <Example14Requisitions />
    <hr />
    <br />

    <h4>Example15LifeCycle2</h4>
    <Example15LifeCycle2 />
    <hr />
    <br />

    <h4>Example16EmitParent</h4>
    <Example16EmitParent />
    <hr />
    <br />

    <h4>Example17Time</h4>
    <Example17Time />
    <hr />
    <br />
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
// import NxIcon from "./components/ui/NxIcon.vue";
// import NxBadge from "./components/ui/NxBadge.vue";
// import NxAvatar from "./components/ui/NxAvatar.vue";
// import NxButton from "./components/ui/NxButton.vue";
// import ComponentShowcase from "./components/ComponentShowcase.vue";
// import AuthPage from "./components/auth/AuthPage.vue";
// import { useAuth } from "./composables/useAuth";
import Example01Interpolation from "./components/simple-studies/Example01Interpolation.vue";
import Example02And03Conditionals from "./components/simple-studies/Example02And03Conditionals.vue";
import Example04Loop from "./components/simple-studies/Example04Loop.vue";
import Example05HTML from "./components/simple-studies/Example05HTML.vue";
import Example06VModel from "./components/simple-studies/Example06V-Model.vue";
import Example07Class from "./components/simple-studies/Example07Class.vue";
import Example08Click from "./components/simple-studies/Example08Click.vue";
import Example09Keyboard from "./components/simple-studies/Example09Keyboard.vue";
import Example10Submit from "./components/simple-studies/Example10Submit.vue";
import Example11LifeCycle from "./components/simple-studies/Example11LifeCycle.vue";
import Example12Props1 from "./components/simple-studies/Example12Props1.vue";
import Example13Routes from "./components/simple-studies/Example13Routes.vue";
import Example14Requisitions from "./components/simple-studies/Example14Requisitions.vue";
import Example15LifeCycle2 from "./components/simple-studies/Example15LifeCycle2.vue";
import Example16EmitParent from "./components/simple-studies/Example16EmitParent.vue";
import Example17Time from "./components/simple-studies/Example17Time.vue";

// const currentView = ref("showcase");

// const { user, isAuthenticated, logout } = useAuth();
</script>

<style scoped>
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
  background: var(--nx-ink);
  color: var(--nx-surface);
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
