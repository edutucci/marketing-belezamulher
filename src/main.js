import { createApp } from 'vue'
import Components from 'hawkvuemdframeworkvue3';

import App from './App.vue'
import router from './router';

import 'hawkvuemdframeworkvue3/dist/hawk_default_stylus.styl';
import 'hawkvuemdframeworkvue3/dist/hawkvuemd-vue3.css';

const app = createApp(App);
Object.keys(Components.Components).forEach((name) => {
  app.component(name, Components.Components[name]);
});

app.use(Components)
  .use(router)
  .mount('#app')
