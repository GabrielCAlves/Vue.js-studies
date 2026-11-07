<template>
  <div class="injection-demo">
    <h1>Example 18: Inject Components via Code</h1>
    <button @click="injectComponents">Inject Components</button>
    <div id="injected-components"></div>
    <button @click="injectModal" class="inject-modal-button">Inject Modal</button>
    <button @click="injectSlider" class="inject-slider-button">Inject Slider</button>
    <button @click="injectCard" class="inject-card-button">Inject Card</button>
    <button @click="injectInfiniteSideScrollWithImageGalleryCarousel" class="inject-gallery-button">Inject Image Gallery</button>
    <button @click="injectForm" class="inject-form-button">Inject Form</button>
    <button @click="injectToDoList" class="inject-todo-button">Inject To-Do List</button>
    <button @click="injectColorPickerPanel" class="inject-color-button">Inject Color Picker Panel</button>
    <button @click="injectFormPicker" class="inject-file-button">Inject Form Picker</button>
  </div>
</template>

<script>
// 1. IMPORTAR as funções h e render do Vue 3
import { h, render } from 'vue';

export default {
  methods: {
    injectModal() {
      // 2. Usar h() em vez de this.$createElement
      const modalVNode = h('div', { class: 'modal' }, [
        h('h2', 'Injected Modal'),
        h('p', 'This modal was injected via code.'),
        h('button', { onClick: this.closeModal }, 'Close') // No Vue 3, eventos são onClick
      ]);

      const modalContainer = document.createElement('div');
      modalContainer.id = 'injected-modal';
      document.body.appendChild(modalContainer);
      
      // 3. Usar render() em vez de this.$mount()
      render(modalVNode, modalContainer);
    },
    injectSlider() {
      const sliderVNode = h('div', { class: 'slider' }, [
        h('h2', 'Injected Slider'),
        h('input', { type: 'range', min: 0, max: 100 })
      ]);
      const sliderContainer = document.createElement('div');
      sliderContainer.id = 'injected-slider';
      document.getElementById('injected-components').appendChild(sliderContainer);
      render(sliderVNode, sliderContainer);
    },
    injectCard() {
      const cardVNode = h('div', { class: 'card' }, [
        h('h2', 'Injected Card'),
        h('p', 'This card was injected via code.')
      ]);
      const cardContainer = document.createElement('div');
      cardContainer.id = 'injected-card';
      document.getElementById('injected-components').appendChild(cardContainer);
      render(cardVNode, cardContainer);
    },
    injectInfiniteSideScrollWithImageGalleryCarousel() {
      const galleryVNode = h('div', { class: 'image-gallery' }, [
        h('h2', 'Injected Image Gallery'),
        h('div', { class: 'carousel' }, [
          h('img', { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPf_062JKWOBQr9rKxfyjLtlwzCn6Wwx_fJ6vQDIAgQ&s=10', alt: 'Image 1' }),
          h('img', { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxrWsdJFvBx8g6CtZnXj9S9xcOtMmEysWTAz1M-HSrxg&s=10', alt: 'Image 2' }),
          h('img', { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAcJcD_pe2-T5M3tB4BuVHrdtIhMfDaWfFGyI8pRmNA&s=10', alt: 'Image 3' })
        ])
      ]);
      const galleryContainer = document.createElement('div');
      galleryContainer.id = 'injected-gallery';
      document.getElementById('injected-components').appendChild(galleryContainer);
      render(galleryVNode, galleryContainer);
    },
    injectForm() {
      const formVNode = h('form', { class: 'injected-form' }, [
        h('h2', 'Injected Form'),
        h('label', { for: 'name' }, 'Name:'),
        h('input', { type: 'text', id: 'name', name: 'name' }),
        h('label', { for: 'email' }, 'Email:'),
        h('input', { type: 'email', id: 'email', name: 'email' }),
        h('button', { type: 'submit' }, 'Submit')
      ]);
      const formContainer = document.createElement('div');
      formContainer.id = 'injected-form';
      document.getElementById('injected-components').appendChild(formContainer);
      render(formVNode, formContainer);
    },
    injectToDoList() {
      const todoListVNode = h('div', { class: 'todo-list' }, [
        h('h2', 'Injected To-Do List'),
        h('ul', [
          h('li', 'Task 1'),
          h('li', 'Task 2'),
          h('li', 'Task 3')
        ])
      ]);
      const todoListContainer = document.createElement('div');
      todoListContainer.id = 'injected-todo-list';
      document.getElementById('injected-components').appendChild(todoListContainer);
      render(todoListVNode, todoListContainer);
    },
    injectColorPickerPanel() {
      const colorPickerVNode = h('div', { class: 'color-picker-panel' }, [
        h('h2', 'Injected Color Picker Panel'),
        h('input', { type: 'color' })
      ]);
      const colorPickerContainer = document.createElement('div');
      colorPickerContainer.id = 'injected-color-picker';
      document.getElementById('injected-components').appendChild(colorPickerContainer);
      render(colorPickerVNode, colorPickerContainer);
    },
    injectFormPicker() {
      const formPickerVNode = h('div', { class: 'form-picker' }, [
        h('h2', 'Injected Form Picker'),
        h('input', { type: 'file' })
      ]);
      const formPickerContainer = document.createElement('div');
      formPickerContainer.id = 'injected-form-picker';
      document.getElementById('injected-components').appendChild(formPickerContainer);
      render(formPickerVNode, formPickerContainer);
    },
  }
}
</script>

<style scoped>
.injection-demo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.65rem;
  color: #493737;
}

.injection-demo h1 {
  width: 100%;
  margin: 0 0 0.4rem;
  color: #7f1d26;
  font-size: 1.15rem;
}

.injection-demo > button {
  min-height: 2.45rem;
  padding: 0.5rem 0.8rem;
  border: 1px solid #c62828;
  border-radius: 0.55rem;
  background: #c62828;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-size: 0.88rem;
  font-weight: 700;
  transition: background 160ms ease, transform 160ms ease;
}

.injection-demo > button:hover {
  transform: translateY(-1px);
  background: #a61f24;
}

#injected-components {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
  gap: 0.8rem;
}

#injected-components :deep(.modal),
#injected-components :deep(.slider),
#injected-components :deep(.card),
#injected-components :deep(.image-gallery),
#injected-components :deep(.injected-form),
#injected-components :deep(.todo-list),
#injected-components :deep(.color-picker-panel),
#injected-components :deep(.form-picker) {
  box-sizing: border-box;
  min-width: 0;
  padding: 1rem;
  border: 1px solid #f0dddd;
  border-radius: 0.7rem;
  background: #fff8f7;
  color: #493737;
}

#injected-components :deep(.modal) {
  position: static;
  width: auto;
  height: auto;
  z-index: auto;
}

#injected-components :deep(form) {
  display: grid;
  gap: 0.5rem;
  max-width: none;
  margin: 0;
  padding: 1rem;
  border: 1px solid #f0dddd;
  border-radius: 0.7rem;
  background: #fff8f7;
}

#injected-components :deep(h2) {
  margin: 0 0 0.7rem;
  color: #8f2029;
  font-size: 1rem;
}

#injected-components :deep(button) {
  padding: 0.45rem 0.7rem;
  border: 0;
  border-radius: 0.45rem;
  background: #c62828;
  color: #fff;
  cursor: pointer;
  font: inherit;
}

#injected-components :deep(input:not([type="range"]):not([type="color"])),
#injected-components :deep(input[type="range"]) {
  max-width: 100%;
  accent-color: #c62828;
}

#injected-components :deep(.carousel) {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
}

#injected-components :deep(img) {
  width: min(45%, 8rem);
  border-radius: 0.45rem;
  object-fit: cover;
}

#injected-components :deep(ul) {
  margin: 0;
  padding-left: 1.2rem;
}
</style>