<template>
  <div>
    <p class="whitespace-pre-line">
      {{ $t("home.greeting") }}
    </p>
    <div class="my-10 flex flex-col items-center justify-center">
      <p>Endless Eventsaal 2</p>
      <p>Weyerstraße 289</p>
      <p>42719 Solingen</p>
      <br />
      <p>{{ $t("home.datetime") }}</p>
    </div>
    <p>{{ $t("home.hopeToSeeYou") }}</p>
    <div class="flex flex-col gap-4 items-center justify-between mt-5">
      <RouterLink to="/schedule">
        <button
          class="btn rounded-sm btn-ghost border border-[#795218] text-[#795218] hover:bg-[#795218] hover:text-white hover:border-[#795218]"
        >
          <p>{{ $t("home.buttons.schedule") }}</p>
        </button>
      </RouterLink>

      <RouterLink to="/sign">
        <button
          class="btn rounded-sm btn-ghost border border-[#795218] text-[#795218] hover:bg-[#795218] hover:text-white hover:border-[#795218]"
        >
          <p>{{ $t("home.buttons.rsvp") }}</p>
        </button>
      </RouterLink>
    </div>
  </div>
</template>
