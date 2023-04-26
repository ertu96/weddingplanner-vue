<script lang="ts">
import type { Guest } from "@/interfaces/Guest";
import { useGuestsStore } from "@/stores/GuestsStore";
import { useSystemStore } from "@/stores/SystemStore";
import { mapStores } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
  name: "GuestsView",
  computed: {
    ...mapStores(useGuestsStore, useSystemStore),
  },
  methods: {
    openRow(guest: Guest) {
      this.systemStore.setDialog({
        visible: true,
        title: guest.name,
        content: guest.comment,
      });
    },
  },
  mounted() {
    this.guestsStore.fetchGuests();
    this.guestsStore.fetchTotalGuests();
  },
});
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table text-white w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Anzahl</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="guest in guestsStore.guests"
          :key="guest.id"
          @click="openRow(guest)"
        >
          <th :class="!guest.attending ? 'bg-red-950' : 'bg-green-950'">
            {{ guest.name }}
          </th>
          <td :class="!guest.attending ? 'bg-red-950' : 'bg-green-950'">
            +{{ guest.additionalGuests }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <hr />
  <div>Einträge: {{ guestsStore.getGuests.length }}</div>
  <div>Gäste (insgesamt): {{ guestsStore.getTotalGuests }}</div>
</template>
