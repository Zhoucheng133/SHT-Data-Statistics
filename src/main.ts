import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import PrimeVue from 'primevue/config';
const pinia = createPinia();
import Aura from '@primeuix/themes/aura';

const app = createApp(App);
app.use(pinia)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});
app.mount('#app')
