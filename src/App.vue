<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="bg-white min-h-screen text-[#795218] tracking-wider">
    <Header />
    <div class="container mx-auto py-10 max-w-md">
      <RouterView />
    </div>
  </div>
</template>
