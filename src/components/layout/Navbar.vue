<script lang="ts">
import { useSystemStore } from "@/stores/SystemStore";
import { mapStores } from "pinia";
import LanguageDialog from "../dialogs/LanguageDialog.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  computed: {
    ...mapStores(useSystemStore),
  },
  components: {
    LanguageDialog,
  },
});
</script>

<template>
  <header
    class="py-4 bg-white/90 backdrop-blur shadow-sm flex justify-between items-center px-4"
  >
    <div class="w-[26px]" />
    <RouterLink to="/">
      <div class="text-4xl">E|E</div>
    </RouterLink>
    <label for="language-modal"
      ><img
        :src="`/icons/${systemStore.getLocale}.svg`"
        width="26"
        alt="German"
    /></label>
  </header>
  <LanguageDialog />
</template>
