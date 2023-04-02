import { createPinia } from "pinia";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { Locale } from "./enums/Locale";
import { messages } from "./helpers/messages";

const i18n = createI18n({
  locale: Locale.DE,
  fallbackLocale: Locale.GB,
  messages,
});

const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.use(router);

app.mount("#app");
