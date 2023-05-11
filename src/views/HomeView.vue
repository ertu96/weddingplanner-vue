<script lang="ts">
import router from "@/router";
import { useSystemStore } from "@/stores/SystemStore";

import { mapStores } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  data: () => ({
    googleDriveUrl: import.meta.env.VITE_GOOGLE_DRIVE_URL,
  }),
  computed: {
    ...mapStores(useSystemStore),
  },
  mounted() {
    router.push({ name: "share" });
  },
});
</script>

<template>
  <img
    :src="`/welcome-banner/welcome-${systemStore.getLocale}.png`"
    alt="Welcome"
    class="py-4"
  />
  <div class="px-8 pb-8">
    <p class="whitespace-pre-line">
      {{ $t("home.greeting") }}
    </p>
    <div class="my-10 flex flex-col items-center justify-center">
      <p>Endless Eventsaal 2</p>
      <p>Weyerstraße 289</p>
      <p>42719 Solingen</p>
      <br />
      <p>{{ $t("home.datetime") }}</p>
    </div>
    <p>{{ $t("home.hopeToSeeYou") }}</p>
    <div class="flex flex-col gap-4 items-center justify-between mt-5">
      <RouterLink
        to="/schedule"
        class="btn rounded-sm btn-ghost border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white hover:border-stone-900 btn-block capitalize"
      >
        {{ $t("home.buttons.schedule") }}
      </RouterLink>

      <RouterLink
        to="/sign"
        class="btn rounded-sm btn-ghost border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white hover:border-stone-900 btn-block capitalize"
      >
        {{ $t("home.buttons.rsvp") }}
      </RouterLink>
      <a
        :href="googleDriveUrl"
        target="_blank"
        rel="noreferrer"
        class="btn rounded-sm btn-ghost border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white hover:border-stone-900 btn-block capitalize"
      >
        Google Photos
      </a>
    </div>
  </div>
</template>
