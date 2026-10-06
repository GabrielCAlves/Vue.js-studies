<template>
  <div>
    <h1>Example 18: Inject Components via Code</h1>
    <button @click="injectComponents">Inject Components</button>
    <div id="injected-components"></div>
    <button @click="injectModal" class="modal">Inject Modal</button>
    <button @click="injectSlider" class="improvedSlider">Inject Slider</button>
    <button @click="injectCard" class="card">Inject Card</button>
    <button @click="injectInfiniteSideScrollWithImageGalleryCarousel" class="imageGallery">Inject Image Gallery</button>
    <button @click="injectForm" class="form">Inject Form</button>
    <button @click="injectToDoList" class="toDoList">Inject To-Do List</button>
    <button @click="injectColorPickerPanel" class="colorPicker">Inject Color Picker Panel</button>
    <button @click="injectFormPicker" class="formPicker">Inject Form Picker</button>
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

</style>