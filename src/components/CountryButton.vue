<script lang="ts">
import type { Locale } from "@/enums/Locale";
import { useSystemStore } from "@/stores/SystemStore";
import { mapStores } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CountryButton",
  computed: {
    ...mapStores(useSystemStore),
  },
  props: {
    locale: {
      type: String as () => Locale,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    flag: {
      type: String,
      required: true,
    },
  },
  methods: {
    changeLanguage() {
      this.systemStore.setLocale(this.locale);
      this.$i18n.locale = this.locale;
    },
  },
});
</script>

<template>
  <label for="language-modal" @click="changeLanguage">
    <img :src="flag" :alt="country" />
    <p class="text-center mt-1">{{ country }}</p>
  </label>
</template>
