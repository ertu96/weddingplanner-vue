import type { Guest } from "@/interfaces/Guest";
import { defineStore } from "pinia";

export const useGuestsStore = defineStore("guests", {
  state: () => ({
    guests: [] as Guest[],
    totalGuests: 0,
  }),
  getters: {
    getGuests(state) {
      return state.guests;
    },
    getTotalGuests(state) {
      return state.totalGuests;
    },
  },
  actions: {
    async fetchGuests() {
      const result = await fetch(`${import.meta.env.VITE_API_URL}/api/guest`);
      const data = await result.json();
      this.guests = data;
    },
    async fetchTotalGuests() {
      const result = await fetch(
        `${import.meta.env.VITE_API_URL}/api/guest/count`
      );
      const data = await result.json();
      this.totalGuests = data;
    },
  },
});
