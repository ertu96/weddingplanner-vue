import type { Dialog } from "@/interfaces/Dialog";
import { defineStore } from "pinia";

export const useSystemStore = defineStore("system", {
  state: () => ({
    dialog: {
      visible: false,
      title: "",
      content: "",
    },
  }),
  getters: {
    getDialog(state) {
      return state.dialog;
    },
  },
  actions: {
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
