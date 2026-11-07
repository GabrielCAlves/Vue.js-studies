<template>
  <main class="basics-page">
    <header class="basics-header">
      <span class="basics-eyebrow">Vue.js studies</span>
      <h1>Vue basics</h1>
      <p>Explore examples of Vue fundamentals and common patterns.</p>
    </header>

    <div class="basics-grid">
      <section class="basics-example">
        <h2>Example 01 · Interpolation</h2>
        <div class="example-content"><Example01Interpolation /></div>
      </section>
      <section class="basics-example">
        <h2>Examples 02–03 · Conditionals</h2>
        <div class="example-content"><Example02And03Conditionals /></div>
      </section>
      <section class="basics-example">
        <h2>Example 04 · Loops</h2>
        <div class="example-content"><Example04Loop /></div>
      </section>
      <section class="basics-example">
        <h2>Example 05 · HTML</h2>
        <div class="example-content"><Example05HTML /></div>
      </section>
      <section class="basics-example">
        <h2>Example 06 · V-Model</h2>
        <div class="example-content"><Example06VModel /></div>
      </section>
      <section class="basics-example">
        <h2>Example 07 · Classes</h2>
        <div class="example-content"><Example07Class /></div>
      </section>
      <section class="basics-example">
        <h2>Example 08 · Click events</h2>
        <div class="example-content"><Example08Click /></div>
      </section>
      <section class="basics-example">
        <h2>Example 09 · Keyboard events</h2>
        <div class="example-content"><Example09Keyboard /></div>
      </section>
      <section class="basics-example">
        <h2>Example 10 · Form submit</h2>
        <div class="example-content"><Example10Submit /></div>
      </section>
      <section class="basics-example">
        <h2>Example 11 · Lifecycle</h2>
        <div class="example-content"><Example11LifeCycle /></div>
      </section>
      <section class="basics-example">
        <h2>Example 12 · Props</h2>
        <div class="example-content"><Example12Props1 /></div>
      </section>
      <section class="basics-example">
        <h2>Example 13 · Routes</h2>
        <div class="example-content"><Example13Routes /></div>
      </section>
      <section class="basics-example">
        <h2>Example 14 · Requests</h2>
        <div class="example-content"><Example14Requisitions /></div>
      </section>
      <section class="basics-example">
        <h2>Example 15 · Lifecycle</h2>
        <div class="example-content"><Example15LifeCycle2 /></div>
      </section>
      <section class="basics-example">
        <h2>Example 16 · Emit events</h2>
        <div class="example-content"><Example16EmitParent /></div>
      </section>
      <section class="basics-example">
        <h2>Example 17 · Time</h2>
        <div class="example-content"><Example17Time /></div>
      </section>
      <section class="basics-example basics-example--wide">
        <h2>Example 18 · Dynamic components</h2>
        <div class="example-content"><Example18InjectComponentsViaCode /></div>
      </section>
    </div>
  </main>
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
import * as Example01InterpolationModule from "./Example01Interpolation.vue";
import * as Example02And03ConditionalsModule from "./Example02And03Conditionals.vue";
import * as Example04LoopModule from "./Example04Loop.vue";
import * as Example05HTMLModule from "./Example05HTML.vue";
import * as Example06VModelModule from "./Example06V-Model.vue";
import * as Example07ClassModule from "./Example07Class.vue";
import * as Example08ClickModule from "./Example08Click.vue";
import * as Example09KeyboardModule from "./Example09Keyboard.vue";
import * as Example10SubmitModule from "./Example10Submit.vue";
import * as Example11LifeCycleModule from "./Example11LifeCycle.vue";
import * as Example12Props1Module from "./Example12Props1.vue";
import * as Example13RoutesModule from "./Example13Routes.vue";
import * as Example14RequisitionsModule from "./Example14Requisitions.vue";
import * as Example15LifeCycle2Module from "./Example15LifeCycle2.vue";
import * as Example16EmitParentModule from "./Example16EmitParent.vue";
import * as Example17TimeModule from "./Example17Time.vue";
import Example18InjectComponentsViaCode from "./Example18InjectComponentsViaCode.vue";

const Example01Interpolation = (Example01InterpolationModule as any).default;
const Example02And03Conditionals = (Example02And03ConditionalsModule as any)
  .default;
const Example04Loop = (Example04LoopModule as any).default;
const Example05HTML = (Example05HTMLModule as any).default;
const Example06VModel = (Example06VModelModule as any).default;
const Example07Class = (Example07ClassModule as any).default;
const Example08Click = (Example08ClickModule as any).default;
const Example09Keyboard = (Example09KeyboardModule as any).default;
const Example10Submit = (Example10SubmitModule as any).default;
const Example11LifeCycle = (Example11LifeCycleModule as any).default;
const Example12Props1 = (Example12Props1Module as any).default;
const Example13Routes = (Example13RoutesModule as any).default;
const Example14Requisitions = (Example14RequisitionsModule as any).default;
const Example15LifeCycle2 = (Example15LifeCycle2Module as any).default;
const Example16EmitParent = (Example16EmitParentModule as any).default;

const Example17Time =
  (Example17TimeModule as any).default ?? Object.values(Example17TimeModule)[0];
</script>

<style scoped>
.basics-page {
  box-sizing: border-box;
  min-height: 100vh;
  padding: clamp(1.5rem, 5vw, 4rem) clamp(1rem, 4vw, 3rem);
  background:
    radial-gradient(ellipse at 10% 5%, rgba(239, 68, 68, 0.14), transparent 32rem),
    #faf6f6;
  color: #302626;
}

.basics-header,
.basics-grid {
  width: min(100%, 90rem);
  margin-right: auto;
  margin-left: auto;
}

.basics-header {
  margin-bottom: 2rem;
}

.basics-eyebrow {
  display: inline-block;
  margin-bottom: 0.55rem;
  color: #b4232d;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.basics-header h1 {
  margin: 0;
  color: #302626;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.045em;
}

.basics-header p {
  margin: 0.65rem 0 0;
  color: #756565;
  line-height: 1.6;
}

.basics-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: 1.25rem;
}

.basics-example {
  min-width: 0;
  padding: clamp(1rem, 3vw, 1.5rem);
  border: 1px solid #f0dddd;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 0.75rem 2rem rgba(89, 29, 34, 0.07);
}

.basics-example--wide {
  grid-column: 1 / -1;
}

.basics-example h2 {
  margin: 0 0 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #f0dddd;
  color: #8f2029;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: -0.01em;
}

.example-content {
  min-width: 0;
  color: #3f3a35;
  line-height: 1.6;
}

.example-content :deep(> *) {
  max-width: 100%;
}

.example-content :deep(button) {
  min-height: 2.4rem;
  padding: 0.5rem 0.85rem;
  border: 1px solid #c62828;
  border-radius: 0.55rem;
  background: #c62828;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;
}

.example-content :deep(button:hover) {
  transform: translateY(-1px);
  border-color: #a61f24;
  background: #a61f24;
}

.example-content :deep(input:not([type="radio"]):not([type="checkbox"])),
.example-content :deep(textarea),
.example-content :deep(select) {
  max-width: 100%;
  border: 1px solid #e4cece;
  border-radius: 0.5rem;
}

.example-content :deep(input:focus-visible),
.example-content :deep(textarea:focus-visible),
.example-content :deep(select:focus-visible),
.example-content :deep(button:focus-visible) {
  outline: 3px solid rgba(198, 40, 40, 0.2);
  outline-offset: 2px;
}

.example-content :deep(table) {
  display: block;
  max-width: 100%;
  overflow-x: auto;
  border-collapse: collapse;
}

.example-content :deep(th),
.example-content :deep(td) {
  padding: 0.55rem 0.7rem;
  border: 1px solid #f0dddd;
  text-align: left;
}

@media (max-width: 760px) {
  .basics-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .basics-example--wide {
    grid-column: auto;
  }
}
</style>
