<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Header />
  <div class="container mx-auto p-10">
    <RouterView />
  </div>
</template>
