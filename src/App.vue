<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="bg-white min-h-screen text-[#795218]">
    <Header />
    <div class="container mx-auto p-10">
      <RouterView />
    </div>
  </div>
</template>
