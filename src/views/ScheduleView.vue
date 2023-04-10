<template>
  <div class="p-8">
    <h1 class="text-center text-2xl mb-6">{{ $t("home.buttons.schedule") }}</h1>
    <ul>
      <li class="flex justify-between">
        <p>17:00</p>
        <p>{{ $t("schedule.start") }}</p>
      </li>
      <li class="flex justify-between">
        <p>18:00</p>
        <p>{{ $t("schedule.greeting") }}</p>
      </li>
      <li class="flex justify-between">
        <p>18:30</p>
        <p>{{ $t("schedule.food") }}</p>
      </li>
      <li class="flex justify-between">
        <p>19:30</p>
        <p>{{ $t("schedule.games") }}</p>
      </li>
      <li class="flex justify-between">
        <p>20:30</p>
        <p>{{ $t("schedule.cake") }}</p>
      </li>
      <li class="flex justify-between">
        <p>21:00</p>
        <p>{{ $t("schedule.dance") }}</p>
      </li>
    </ul>
  </div>
</template>
