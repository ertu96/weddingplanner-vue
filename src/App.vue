<script setup lang="ts">
import Navbar from "@/components/layout/Navbar.vue";
import { RouterView } from "vue-router";
import BasicDialogVue from "./components/dialogs/BasicDialog.vue";
</script>

<template>
  <div class="min-h-screen text-stone-900 tracking-[.01em]">
    <Navbar />
    <main
      class="container mx-auto my-10 backdrop-blur-2xl shadow rounded-sm bg-white/50 md:max-w-md max-w-xs"
    >
      <RouterView />
    </main>
    <BasicDialogVue />
  </div>
</template>
