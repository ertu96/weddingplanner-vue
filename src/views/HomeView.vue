<script setup lang="ts"></script>

<template>
  <div>
    <p>Hallo,</p>
    <p>wir laden euch herzlich zu unserer Hochzeit ein.</p>
    <p>Bitte gibt Bescheid, ob ihr dran teilnehmen könnt.</p>
    <div class="my-10 flex flex-col items-center justify-center">
      <p>Endless Eventsaal 2</p>
      <p>Weyerstraße 289</p>
      <p>42719 Solingen</p>
      <br />
      <p>am 11.06.2023 um 17:00</p>
    </div>

    <p>Wir freuen uns auf euch!</p>
    <div class="flex flex-col gap-4 items-center justify-between mt-5">
      <RouterLink to="/schedule">
        <button
          class="btn rounded-sm btn-ghost border border-[#795218] text-[#795218] hover:bg-[#795218] hover:text-white hover:border-[#795218]"
        >
          Programmablauf
        </button>
      </RouterLink>

      <RouterLink to="/sign">
        <button
          class="btn rounded-sm btn-ghost border border-[#795218] text-[#795218] hover:bg-[#795218] hover:text-white hover:border-[#795218]"
        >
          Absagen/Zusagen
        </button>
      </RouterLink>
    </div>
  </div>
</template>
