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
    </nav> -->

    <!-- Main View Content -->
    <!-- <main class="app-content">
      <ComponentShowcase v-if="currentView === 'showcase'" />
      <AuthPage v-else-if="currentView === 'auth'" />
    </main>

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

    <h4>Example18InjectComponentsViaCode</h4>
    <Example18InjectComponentsViaCode />
    <hr />
    <br /> -->

    <!-- <Everything /> -->

    <!--Firebase-->
    <!--Springboot-->
    <!-- <h4>Router View</h4>
    <router-view /> -->

    <!--Supabase-->
    <!-- <nav>
      <h1>Supa Smoothies</h1>
      <router-link to="/">Home</router-link>
      <router-link to="/create">Create New Smoothie</router-link>
    </nav> -->

    <div id="backend-btns">
      <!-- <input type="checkbox" v-model="_isMarked" /> -->
      <button @click="LoadAIGeneratedProject" id="aigenerated-btn">
        AI Generated Project
      </button>
      <button @click="LoadBasics" id="basics-btn">Basics</button>
      <button @click="LoadFireStoreProject" id="firestore-btn">
        Firestore Backend
      </button>
      <button @click="LoadSpringBootProject" id="springboot-btn">
        Springboot Backend
      </button>
      <button @click="LoadSupabaseProject" id="supabase-btn">
        Supabase Backend
      </button>
    </div>

    <router-view />
  </div>
</template>

<script setup lang="ts">
// Para rodar no backend, abra o terminal e execute os seguintes comandos:
// cd backend
// .\gradlew.bat bootRun

import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import * as Everything from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/AIGeneratedAndLoginSignUp.vue";
import * as Basics from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/Basics.vue";
// import * as NxIconModule from "./components/ui/NxIcon.vue";
// import * as NxBadgeModule from "./components/ui/NxBadge.vue";
// import * as NxAvatarModule from "./components/ui/NxAvatar.vue";
// import * as NxButtonModule from "./components/ui/NxButton.vue";
// import * as ComponentShowcaseModule from "./components/ComponentShowcase.vue";
// import * as AuthPageModule from "./components/auth/AuthPage.vue";
// import { useAuth } from "./composables/useAuth";

// import * as Example01InterpolationModule from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/Example01Interpolation.vue";
// import * as Example02And03ConditionalsModule from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/Example02And03Conditionals.vue";
// import * as Example04LoopModule from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/Example04Loop.vue";
// import * as Example05HTMLModule from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/Example05HTML.vue";
// import * as Example06VModelModule from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/Example06V-Model.vue";
// import * as Example07ClassModule from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/Example07Class.vue";
// import * as Example08ClickModule from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/Example08Click.vue";
// import * as Example09KeyboardModule from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/Example09Keyboard.vue";
// import * as Example10SubmitModule from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/Example10Submit.vue";
// import * as Example11LifeCycleModule from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/Example11LifeCycle.vue";
// import * as Example12Props1Module from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/Example12Props1.vue";
// import * as Example13RoutesModule from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/Example13Routes.vue";
// import * as Example14RequisitionsModule from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/Example14Requisitions.vue";
// import * as Example15LifeCycle2Module from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/Example15LifeCycle2.vue";
// import * as Example16EmitParentModule from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/Example16EmitParent.vue";
// import * as Example17TimeModule from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/Example17Time.vue";
// import Example18InjectComponentsViaCode from "./components/simple-studies/AIGeneratedAndFirebaseLoginSignUp/Example18InjectComponentsViaCode.vue";

// const NxIcon = (NxIconModule as any).default;
// const NxBadge = (NxBadgeModule as any).default;
// const NxAvatar = (NxAvatarModule as any).default;
// const NxButton = (NxButtonModule as any).default;
// const ComponentShowcase = (ComponentShowcaseModule as any).default;
// const AuthPage = (AuthPageModule as any).default;
// const Example01Interpolation = (Example01InterpolationModule as any).default;
// const Example02And03Conditionals = (Example02And03ConditionalsModule as any)
//   .default;
// const Example04Loop = (Example04LoopModule as any).default;
// const Example05HTML = (Example05HTMLModule as any).default;
// const Example06VModel = (Example06VModelModule as any).default;
// const Example07Class = (Example07ClassModule as any).default;
// const Example08Click = (Example08ClickModule as any).default;
// const Example09Keyboard = (Example09KeyboardModule as any).default;
// const Example10Submit = (Example10SubmitModule as any).default;
// const Example11LifeCycle = (Example11LifeCycleModule as any).default;
// const Example12Props1 = (Example12Props1Module as any).default;
// const Example13Routes = (Example13RoutesModule as any).default;
// const Example14Requisitions = (Example14RequisitionsModule as any).default;
// const Example15LifeCycle2 = (Example15LifeCycle2Module as any).default;
// const Example16EmitParent = (Example16EmitParentModule as any).default;

// const Example17Time =
//   (Example17TimeModule as any).default ?? Object.values(Example17TimeModule)[0];

// const currentView = ref("showcase");

// const { user, isAuthenticated, logout } = useAuth();

// console.log(process.env);

// const _isMarked = ref(false);
// watch(_isMarked, (newValue) => {
//   console.log("Checkbox marked:", newValue);
// });

const router = useRouter();

function LoadAIGeneratedProject() {
  router.push("/");
}

function LoadBasics() {
  router.push("/basics");
}

function LoadFireStoreProject() {
  router.push("/firestore");
}

function LoadSpringBootProject() {
  router.push("/springboot");
}

function LoadSupabaseProject() {
  router.push("/supabase");
}
</script>

<style scoped>
#backend-btns {
  display: flex;
  justify-content: center;
  gap: 10px;
  background-color: black;
  padding: 30px 0;
}

#aigenerated-btn,
#basics-btn,
#firestore-btn,
#springboot-btn,
#supabase-btn {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: white;
  transition: background-color 0.3s;
}

#aigenerated-btn {
  background-color: #007bff;
}

#basics-btn {
  background-color: red;
}

#firestore-btn {
  background-color: orange;
}

#springboot-btn {
  background-color: lightgreen;
  color: black;
}

#supabase-btn {
  background-color: green;
}
</style>
