<template>
  <form class="max-w-md mx-auto flex flex-col items-center gap-2" action="">
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text text-[#795218]">Name</span>
      </label>
      <input
        type="text"
        class="input input-bordered w-full bg-white rounded-sm"
      />
    </div>
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text text-[#795218]">E-Mail</span>
      </label>
      <input
        type="text"
        class="input input-bordered w-full bg-white rounded-sm"
      />
    </div>
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text text-[#795218]">Zusage</span>
      </label>
      <ul class="grid w-full grid-cols-2">
        <li>
          <input
            type="radio"
            id="yes"
            name="isComing"
            value="yes"
            class="hidden peer"
            required
          />
          <label
            for="yes"
            class="inline-flex justify-center items-center w-full p-4 bg-white border border-[#795218] rounded-sm cursor-pointer peer-checked:border-[#795218] peer-checked:text-white peer-checked:bg-[#795218] hover:text-gray-600 hover:bg-gray-100"
          >
            <div class="block">
              <div class="w-full font-semibold">Ja</div>
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="no"
            name="isComing"
            value="yes"
            class="hidden peer"
          />
          <label
            for="no"
            class="inline-flex justify-center items-center w-full p-4 bg-white border border-[#795218] rounded-sm cursor-pointer peer-checked:border-[#795218] peer-checked:text-white peer-checked:bg-[#795218] hover:text-gray-600 hover:bg-gray-100"
          >
            <div class="block">
              <div class="w-full font-semibold">Nein</div>
            </div>
          </label>
        </li>
      </ul>
    </div>
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text text-[#795218]">Weitere Personen</span>
      </label>
      <input
        type="text"
        class="input input-bordered w-full bg-white rounded-sm"
      />
    </div>
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text text-[#795218]">Bemerkung</span>
      </label>
      <textarea
        class="textarea textarea-bordered h-24 bg-white rounded-sm"
      ></textarea>
    </div>
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text text-[#795218]">Passcode</span>
      </label>
      <input
        type="text"
        class="input input-bordered w-full bg-white rounded-sm"
      />
    </div>
    <button
      type="submit"
      class="btn mt-4 btn-block rounded-sm btn-outline border border-[#795218] text-[#795218] hover:bg-[#795218] hover:text-white hover:border-[#795218]"
    >
      Abschicken
    </button>
  </form>
</template>
