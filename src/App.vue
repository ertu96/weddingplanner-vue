<script setup lang="ts">
import Dialog from "@/components/Dialog.vue";
import Header from "@/components/layout/Header.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="bg-white min-h-screen text-[#795218] tracking-wide">
    <Header />
    <div class="container mx-auto py-10 md:max-w-md max-w-xs">
      <RouterView />
    </div>
    <Dialog />
  </div>
</template>
