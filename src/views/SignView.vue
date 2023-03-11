<script lang="ts">
import validate from "@/helpers/validator";
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignView",
  data: () => ({
    isLoading: false,
    form: {
      name: "",
      email: "",
      isAttending: true,
      additionalGuests: 0,
      comment: "",
      passcode: "",
    },
  }),
  methods: {
    addAddtionalGuest() {
      this.form.additionalGuests++;
    },
    removeAdditionalGuest() {
      if (this.form.additionalGuests > 0) this.form.additionalGuests--;
    },
    async submit(e: Event) {
      e.preventDefault();
      const formValidation = validate(this.form);
      if (formValidation.length) {
        alert(formValidation);
        return;
      }
      this.isLoading = true;
      try {
        await axios.post("/api/guest", {
          name: this.form.name,
          email: this.form.email,
          isAttending: this.form.isAttending,
          additionalGuests: this.form.additionalGuests,
          comment: this.form.comment,
        });
        alert("Danke für deine Antwort!");
        this.form = {
          name: "",
          email: "",
          isAttending: true,
          additionalGuests: 0,
          comment: "",
          passcode: "",
        };
      } catch (error) {
        alert(error.response.data.message);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
</script>

<template>
  <form
    class="mx-auto flex flex-col items-center gap-2"
    :onSubmit="submit"
    action=""
  >
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text text-[#795218]">Name</span>
      </label>
      <input
        v-model.lazy="form.name"
        type="text"
        class="input input-bordered w-full bg-white rounded-sm"
      />
    </div>
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text text-[#795218]">E-Mail</span>
      </label>
      <input
        v-model.lazy.trim="form.email"
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
            v-model.lazy="form.isAttending"
            type="radio"
            id="yes"
            name="isAttending"
            value="true"
            class="hidden peer"
            required
          />
          <label
            for="yes"
            class="inline-flex justify-center items-center w-full p-4 bg-white border border-[#795218] rounded-sm cursor-pointer peer-checked:border-[#795218] peer-checked:text-white peer-checked:bg-[#795218] hover:text-gray-600 hover:bg-gray-100"
          >
            <div class="block">
              <div class="w-full font-semibold uppercase">Ja</div>
            </div>
          </label>
        </li>
        <li>
          <input
            v-model.lazy="form.isAttending"
            type="radio"
            id="no"
            name="isAttending"
            value="false"
            class="hidden peer"
          />
          <label
            for="no"
            class="inline-flex justify-center items-center w-full p-4 bg-white border border-[#795218] rounded-sm cursor-pointer peer-checked:border-[#795218] peer-checked:text-white peer-checked:bg-[#795218] hover:text-gray-600 hover:bg-gray-100"
          >
            <div class="block">
              <div class="w-full font-semibold uppercase">Nein</div>
            </div>
          </label>
        </li>
      </ul>
    </div>

    <div class="form-control w-full" v-if="form.isAttending !== 'false'">
      <label class="label">
        <span class="label-text text-[#795218]">Weitere Personen</span>
      </label>
      <div class="flex justify-between gap-2">
        <button
          :class="`btn btn-square btn-outline rounded-sm ${
            form.additionalGuests === 0 ? 'btn-disabled' : ''
          }`"
          type="button"
          @click="removeAdditionalGuest"
        >
          -
        </button>
        <input
          v-model.lazy.number="form.additionalGuests"
          type="text"
          class="input input-bordered w-full bg-white rounded-sm"
        />
        <button
          class="btn btn-square btn-outline rounded-sm"
          type="button"
          @click="addAddtionalGuest"
        >
          +
        </button>
      </div>
    </div>

    <div class="form-control w-full">
      <label class="label">
        <span class="label-text text-[#795218]">Bemerkung</span>
      </label>
      <textarea
        v-model.lazy="form.comment"
        class="textarea textarea-bordered h-24 bg-white rounded-sm"
      ></textarea>
    </div>
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text text-[#795218]">Passcode</span>
      </label>
      <input
        v-model.lazy="form.passcode"
        type="text"
        placeholder="steht auf der Einladung"
        class="input input-bordered w-full bg-white rounded-sm"
      />
    </div>
    <button
      type="submit"
      :class="`${
        isLoading ? 'loading' : ''
      } btn mt-4 btn-block rounded-sm btn-outline border border-[#795218] text-[#795218] hover:bg-[#795218] hover:text-white hover:border-[#795218]`"
    >
      Abschicken
    </button>
  </form>
</template>
