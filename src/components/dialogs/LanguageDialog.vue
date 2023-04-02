<script lang="ts">
import { Locale } from "@/enums/Locale";
import { defineComponent } from "vue";
import CountryButton from "../CountryButton.vue";
import GermanyFlag from "/icons/de.svg";
import GreatBritainFlag from "/icons/gb.svg";
import JapanFlag from "/icons/jp.svg";
import RussiaFlag from "/icons/ru.svg";
import TurkiyeFlag from "/icons/tr.svg";

export default defineComponent({
  name: "LanguageDialog",
  data: () => ({
    open: false,
    languages: [
      {
        id: Locale.TR,
        country: "Türkçe",
        flag: TurkiyeFlag,
      },
      {
        id: Locale.RU,
        country: "русский",
        flag: RussiaFlag,
      },
      {
        id: Locale.JP,
        country: "日本語",
        flag: JapanFlag,
      },
      {
        id: Locale.GB,
        country: "English",
        flag: GreatBritainFlag,
      },
      {
        id: Locale.DE,
        country: "Deutsch",
        flag: GermanyFlag,
      },
    ],
  }),
  components: { CountryButton },
  mounted() {
    this.open = true;
  },
});
</script>

<template>
  <input
    type="checkbox"
    id="language-modal"
    class="modal-toggle"
    v-model="open"
  />
  <div class="modal">
    <div
      class="modal-box relative h-[100vh] bg-black/60 backdrop-blur-lg rounded-sm text-primary-content"
    >
      <label
        for="language-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <div class="max-h-full grid grid-cols-2 items-center gap-10 pt-10">
        <CountryButton
          v-for="language in languages"
          :key="language.id"
          :locale="language.id"
          :country="language.country"
          :flag="language.flag"
        />
      </div>
    </div>
  </div>
</template>
