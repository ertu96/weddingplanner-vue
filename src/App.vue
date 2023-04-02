<script setup lang="ts">
import Navbar from "@/components/layout/Navbar.vue";
import { RouterView } from "vue-router";
import BasicDialogVue from "./components/dialogs/BasicDialog.vue";
</script>

<template>
  <div class="min-h-screen text-[#795218] tracking-[.01em]">
    <Navbar />
    <main
      class="container mx-auto my-10 p-8 backdrop-blur-xl shadow rounded-sm bg-white/70 md:max-w-md max-w-xs"
    >
      <RouterView />
    </main>
    <BasicDialogVue />
  </div>
</template>
