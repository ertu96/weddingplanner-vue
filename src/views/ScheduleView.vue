<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ScheduleView",
  data: () => ({
    schedule: [
      {
        time: "17:00",
        title: "Beginn",
      },
      {
        time: "17:30",
        title: "Begrüßung",
      },
      {
        time: "17:45",
        title: "Grußwort",
      },
      {
        time: "18:00",
        title: "Essen",
      },
      {
        time: "19:00",
        title: "Kaffee und Kuchen",
      },
      {
        time: "19:30",
        title: "Tortenbuffet",
      },
      {
        time: "20:00",
        title: "Tanz",
      },
      {
        time: "00:00",
        title: "Ende",
      },
    ],
  }),
});
</script>

<template>
  <h1 class="text-center text-2xl mb-6">Programmablauf</h1>
  <ul>
    <li
      v-for="(scheduleItem, index) in schedule"
      :key="index"
      class="flex justify-between"
    >
      <div>{{ scheduleItem.time }}</div>
      <div>{{ scheduleItem.title }}</div>
    </li>
  </ul>
</template>
