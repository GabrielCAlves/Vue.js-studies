<template>
  <div class="showcase">
    <!-- Header / Banner -->
    <header class="showcase__header">
      <div class="showcase__brand">
        <NxIcon name="sliders" :size="32" stroke="3" />
        <div>
          <h1 class="showcase__title">NX Kit Component Suite</h1>
          <p class="showcase__subtitle">Interactive showcase exercising all reusable UI components</p>
        </div>
      </div>

      <div class="showcase__header-badges">
        <NxBadge label="Vue 3" tone="accent" />
        <NxBadge label="17 Components" tone="success" dot />
        <NxBadge label="Neo-Brutalist" tone="neutral" />
      </div>
    </header>

    <!-- Alerts Section -->
    <section class="showcase__section">
      <div class="showcase__section-head">
        <h2 class="showcase__section-title">Alerts & System Feedback</h2>
      </div>

      <div class="showcase__grid-col">
        <NxAlert
          v-if="showAlert"
          tone="info"
          title="System Notification"
          message="All reusable UI components have been compiled and integrated successfully."
          dismissible
          @dismiss="showAlert = false"
        />
        <NxAlert
          tone="success"
          title="Components Ready"
          message="Ready for production use across buttons, inputs, cards, and data display."
          striped
        />
      </div>
    </section>

    <NxDivider orientation="horizontal" label="Action & Status Components" icon="bolt" />

    <!-- Buttons & Badges Section -->
    <section class="showcase__section">
      <div class="showcase__grid-two">
        <!-- Buttons Card -->
        <NxCard title="Buttons" subtitle="Variants, sizes, states, and icons" icon="bolt">
          <div class="component-group">
            <h4 class="component-group__title">Variants</h4>
            <div class="component-row">
              <NxButton variant="solid" label="Solid" />
              <NxButton variant="outline" label="Outline" />
              <NxButton variant="accent" label="Accent" />
              <NxButton variant="danger" label="Danger" />
              <NxButton variant="ghost" label="Ghost" />
              <NxButton variant="link" label="Link Style" />
            </div>
          </div>

          <div class="component-group">
            <h4 class="component-group__title">Features & States</h4>
            <div class="component-row">
              <NxButton icon="search" label="Search" />
              <NxButton iconRight="arrow-right" label="Proceed" variant="accent" />
              <NxButton icon="star" square variant="outline" aria-label="Favorite" />
              <NxButton :loading="isLoading" label="Toggle Loading" @click="isLoading = !isLoading" />
              <NxButton disabled label="Disabled" />
              <NxButton badge="99+" label="Inbox" variant="solid" />
            </div>
          </div>
        </NxCard>

        <!-- Badges Card -->
        <NxCard title="Badges & Tags" subtitle="Status indicators and removable pills" icon="star">
          <div class="component-group">
            <h4 class="component-group__title">Color Tones</h4>
            <div class="component-row">
              <NxBadge tone="neutral" label="Neutral" />
              <NxBadge tone="accent" label="Accent" />
              <NxBadge tone="info" label="Info" />
              <NxBadge tone="success" label="Success" />
              <NxBadge tone="warn" label="Warning" />
              <NxBadge tone="danger" label="Danger" />
              <NxBadge tone="outline" label="Outline" />
            </div>
          </div>

          <div class="component-group">
            <h4 class="component-group__title">Pills, Dots & Removable</h4>
            <div class="component-row">
              <NxBadge tone="success" label="Online" dot />
              <NxBadge tone="warn" label="Pending" dot />
              <NxBadge tone="info" icon="info" label="With Icon" />
              <NxBadge :pill="false" tone="accent" label="Square Tag" />
              <NxBadge
                v-if="badgeVisible"
                tone="danger"
                label="Dismissible"
                removable
                @remove="badgeVisible = false"
              />
              <NxButton
                v-else
                size="xs"
                variant="outline"
                label="Restore Badge"
                @click="badgeVisible = true"
              />
            </div>
          </div>
        </NxCard>
      </div>
    </section>

    <NxDivider orientation="horizontal" label="Form Controls & Inputs" icon="code" />

    <!-- Form Inputs & Controls Section -->
    <section class="showcase__section">
      <NxCard title="Form Controls" subtitle="Inputs, dropdowns, switches, and sliders" icon="sliders">
        <div class="showcase__grid-form">
          <NxInput
            v-model="userName"
            label="User Name"
            placeholder="Type your name..."
            icon="user"
            clearable
            hint="Input with leading icon and clear button"
          />

          <NxInput
            v-model="searchQuery"
            label="Search Query"
            placeholder="Search documentation..."
            icon="search"
            show-count
            :maxlength="30"
          />

          <NxSelect
            v-model="selectedRole"
            label="Assigned Role"
            :options="roleOptions"
            hint="Select an application role"
          />

          <NxSlider
            v-model="sliderValue"
            label="Performance Level"
            unit="%"
            marks
            :min="0"
            :max="100"
          />
        </div>

        <div class="form-row-full">
          <NxTextarea
            v-model="bioText"
            label="Project Description"
            placeholder="Enter notes or description..."
            :rows="3"
            show-count
            :maxlength="200"
            hint-footer="Markdown is supported"
          />
        </div>

        <NxDivider line-style="dashed" />

        <div class="form-switches-row">
          <NxCheckbox
            v-model="agreedToTerms"
            label="Enable Notifications"
            hint="Receive updates when components change"
          />

          <NxCheckbox
            v-model="indeterminateState"
            indeterminate
            label="Partial Sync"
            hint="Indeterminate checkbox state"
          />

          <NxToggle
            v-model="darkModeToggle"
            label="Dark Mode"
            on-label="Active"
            off-label="Inactive"
            on-icon="check"
            off-icon="close"
          />
        </div>
      </NxCard>
    </section>

    <NxDivider orientation="horizontal" label="Feedback & Media" icon="heart" />

    <!-- Progress, Avatars, Ratings & Spinners Section -->
    <section class="showcase__section">
      <div class="showcase__grid-three">
        <!-- Progress Card -->
        <NxCard title="Progress Bars" subtitle="Continuous and striped progress" icon="sliders">
          <div class="component-group">
            <NxProgress :value="sliderValue" label="Dynamic Slider Progress" unit="%" />
            <NxProgress :value="75" label="Striped Progress" striped unit="%" />
            <NxProgress indeterminate label="Indeterminate Task" status-text="Synchronizing..." />
          </div>
        </NxCard>

        <!-- Avatars Card -->
        <NxCard title="Avatars" subtitle="Shapes, statuses, and badges" icon="users">
          <div class="component-group">
            <h4 class="component-group__title">Shapes & Statuses</h4>
            <div class="component-row">
              <NxAvatar name="Alice Walker" shape="circle" status="online" />
              <NxAvatar name="Bob Vance" shape="rounded" status="busy" ring />
              <NxAvatar name="Carol Danvers" shape="square" status="away" />
              <NxAvatar initials="NX" shape="circle" status="offline" />
            </div>
          </div>

          <div class="component-group">
            <h4 class="component-group__title">Rating & Feedback</h4>
            <div class="rating-box">
              <span class="rating-label">Component Satisfaction:</span>
              <NxRating v-model="userRating" :max="5" show-value />
            </div>
          </div>
        </NxCard>

        <!-- Spinners & Tooltips Card -->
        <NxCard title="Spinners & Tooltips" subtitle="Loading states and hover tips" icon="loader">
          <div class="component-group">
            <h4 class="component-group__title">Spinner Variants</h4>
            <div class="component-row">
              <NxSpinner variant="ring" label="Ring" />
              <NxSpinner variant="dots" label="Dots" />
              <NxSpinner variant="bars" label="Bars" />
              <NxSpinner variant="pulse" label="Pulse" />
            </div>
          </div>

          <div class="component-group">
            <h4 class="component-group__title">Tooltips</h4>
            <div class="component-row">
              <NxTooltip content="Top tooltip notification" placement="top">
                <NxButton size="sm" variant="outline" label="Hover (Top)" />
              </NxTooltip>
              <NxTooltip content="Bottom tooltip information" placement="bottom">
                <NxButton size="sm" variant="accent" label="Hover (Bottom)" />
              </NxTooltip>
            </div>
          </div>
        </NxCard>
      </div>
    </section>

    <!-- Footer -->
    <footer class="showcase__footer">
      <p>Reusable Components Showcase &copy; 2026 — Neo-brutalist Design System</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NxAlert from "./ui/NxAlert.vue";
import NxAvatar from "./ui/NxAvatar.vue";
import NxBadge from "./ui/NxBadge.vue";
import NxButton from "./ui/NxButton.vue";
import NxCard from "./ui/NxCard.vue";
import NxCheckbox from "./ui/NxCheckbox.vue";
import NxDivider from "./ui/NxDivider.vue";
import NxIcon from "./ui/NxIcon.vue";
import NxInput from "./ui/NxInput.vue";
import NxProgress from "./ui/NxProgress.vue";
import NxRating from "./ui/NxRating.vue";
import NxSelect from "./ui/NxSelect.vue";
import NxSlider from "./ui/NxSlider.vue";
import NxSpinner from "./ui/NxSpinner.vue";
import NxTextarea from "./ui/NxTextarea.vue";
import NxToggle from "./ui/NxToggle.vue";
import NxTooltip from "./ui/NxTooltip.vue";

/* --- Reactive Component State --- */
const showAlert = ref(true);
const isLoading = ref(false);
const badgeVisible = ref(true);
const userName = ref("Alex Rivera");
const searchQuery = ref("");
const selectedRole = ref("developer");
const sliderValue = ref(65);
const bioText = ref("Crafting modular, reusable component systems with Vue 3 and modern CSS.");
const agreedToTerms = ref(true);
const indeterminateState = ref(true);
const darkModeToggle = ref(false);
const userRating = ref(5);

const roleOptions = [
  { value: "developer", label: "Frontend Developer" },
  { value: "designer", label: "UI/UX Designer" },
  { value: "architect", label: "System Architect" },
  { value: "manager", label: "Product Manager" },
];
</script>

<style scoped>
.showcase {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  text-align: left;
}

.showcase__header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px;
  background-color: var(--nx-surface);
  border: 3px solid var(--nx-ink);
  box-shadow: 6px 6px 0 0 var(--nx-ink);
}

.showcase__brand {
  display: flex;
  align-items: center;
  gap: 16px;
}

.showcase__title {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: var(--nx-ink);
}

.showcase__subtitle {
  margin: 4px 0 0;
  font-size: 0.95rem;
  color: var(--nx-muted);
}

.showcase__header-badges {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.showcase__section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.showcase__section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.showcase__section-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: var(--nx-ink);
}

.showcase__grid-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.showcase__grid-two {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 24px;
}

.showcase__grid-three {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.showcase__grid-form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.form-row-full {
  margin-top: 16px;
}

.form-switches-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  margin-top: 8px;
}

.component-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 18px;
}

.component-group:last-child {
  margin-bottom: 0;
}

.component-group__title {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--nx-muted);
}

.component-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.rating-box {
  display: flex;
  align-items: center;
  gap: 12px;
}

.rating-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--nx-ink);
}

.showcase__footer {
  text-align: center;
  padding: 24px 0 12px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--nx-muted);
}
</style>

