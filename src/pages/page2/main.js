import { createApp } from 'vue';
import App from './app.vue';

async function bootstrap () {
  const app = createApp(App);
  app.mount('#page2');
}

bootstrap();