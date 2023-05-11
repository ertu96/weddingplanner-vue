<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShareView",
  data: () => ({
    googleDriveUrl: import.meta.env.VITE_GOOGLE_DRIVE_URL,
  }),
});
</script>

<template>
  <div class="p-8">
    <h1 class="text-center text-2xl mb-6">{{ $t("share.thanks") }}</h1>
    <p class="whitespace-pre-line mb-3">{{ $t("share.message") }}</p>
    <a
      :href="googleDriveUrl"
      target="_blank"
      rel="noreferrer"
      class="btn rounded-sm btn-ghost border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white hover:border-stone-900 btn-block capitalize"
    >
      Google Photos
    </a>
  </div>
</template>
