<script lang="ts">
import { useSystemStore } from "@/stores/SystemStore";
import { mapStores } from "pinia";
import LanguageDialog from "../dialogs/LanguageDialog.vue";

import { Locale } from "@/enums/Locale";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  computed: {
    ...mapStores(useSystemStore),
  },
  components: {
    LanguageDialog,
  },
  mounted() {
    if (localStorage.getItem("locale") !== null)
      this.$i18n.locale = localStorage.getItem("locale") || Locale.DE;
  },
});
</script>

<template>
  <header
    class="py-4 bg-white/60 backdrop-blur-xl shadow-sm flex justify-between items-center px-4"
  >
    <RouterLink to="/" v-if="$route.name !== 'home'">
      <img src="/icons/arrow-left.svg" alt="back" width="26" />
    </RouterLink>
    <div class="w-[26px]" v-else />
    <RouterLink to="/">
      <div class="text-4xl">E|E</div>
    </RouterLink>
    <label for="language-modal"
      ><img
        :src="`/icons/${systemStore.getLocale}.svg`"
        width="26"
        alt="Language"
    /></label>
  </header>
  <LanguageDialog />
</template>
