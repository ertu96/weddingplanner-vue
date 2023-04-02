<script lang="ts">
import { useSystemStore } from "@/stores/SystemStore";
import { mapStores } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
  name: "BasicDialog",
  computed: {
    ...mapStores(useSystemStore),
  },
  data: () => ({}),
  methods: {},
});
</script>

<template>
  <input
    type="checkbox"
    id="dialog"
    class="modal-toggle"
    :checked="systemStore.getDialog.visible"
  />
  <div class="modal modal-bottom sm:modal-middle">
    <div
      class="modal-box bg-black/80 backdrop-blur-xl rounded-t-md text-base-content"
    >
      <h3 class="font-bold text-lg text-center">
        {{ systemStore.getDialog.title }}
      </h3>
      <p class="py-4 text-center">
        {{ systemStore.getDialog.content }}
      </p>
      <div class="modal-action">
        <button
          @click="systemStore.resetDialog()"
          class="btn w-full rounded-sm"
        >
          Ok
        </button>
      </div>
    </div>
  </div>
</template>
