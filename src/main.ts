import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import PrimeVue from 'primevue/config';
const pinia = createPinia();
import 'primeicons/primeicons.css';
import Aura from '@primeuix/themes/aura';
import "./style.css";
import { definePreset } from '@primeuix/themes';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{slate.50}',
      100: '{slate.100}',
      200: '{slate.200}',
      300: '{slate.300}',
      400: '{slate.400}',
      500: '{slate.500}',
      600: '{slate.600}',
      700: '{slate.700}',
      800: '{slate.800}',
      900: '{slate.900}',
      950: '{slate.950}'
    }
  }
});

const app = createApp(App);
app.use(pinia)
app.use(PrimeVue, {
  theme: {
    preset: MyPreset
  }
});
app.mount('#app')
