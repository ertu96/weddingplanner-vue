import { Locale } from "@/enums/Locale";
import type { Dialog } from "@/interfaces/Dialog";
import { defineStore } from "pinia";

export const useSystemStore = defineStore("system", {
  state: () => ({
    locale: (localStorage.getItem("locale") !== null
      ? localStorage.getItem("locale")
      : Locale.DE) as Locale,
    dialog: {
      visible: false,
      title: "",
      content: "",
    } as Dialog,
  }),
  getters: {
    getLocale(state) {
      return state.locale;
    },
    getDialog(state) {
      return state.dialog;
    },
  },
  actions: {
    setLocale(locale: Locale) {
      localStorage.setItem("locale", locale);
      this.locale = locale;
    },
    setDialog(dialog: Dialog) {
      this.dialog = dialog;
    },
    resetDialog() {
      this.dialog = {
        visible: false,
        title: "",
        content: "",
      };
    },
  },
});
