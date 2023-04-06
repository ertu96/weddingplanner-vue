<script lang="ts">
import validate from "@/helpers/validator";
import { useSystemStore } from "@/stores/SystemStore";
import axios from "axios";
import { mapStores } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignView",
  computed: {
    ...mapStores(useSystemStore),
  },
  data: () => ({
    isLoading: false,
    form: {
      name: "",
      email: "",
      isAttending: true as boolean | "false" | "true",
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
      const formValidation = validate(this.form, this.systemStore.getLocale);
      if (formValidation.length) {
        this.systemStore.setDialog({
          visible: true,
          title: "",
          content: formValidation,
        });
        return;
      }
      this.isLoading = true;
      try {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/guest`, {
          name: this.form.name,
          email: this.form.email,
          isAttending: this.form.isAttending,
          additionalGuests: this.form.additionalGuests,
          comment: this.form.comment,
          locale: this.systemStore.getLocale.toUpperCase(),
        });
        this.systemStore.setDialog({
          visible: true,
          title: "Danke für deine Antwort!",
          content: "Du erhälst in Kürze eine E-Mail",
        });
        this.form = {
          name: "",
          email: "",
          isAttending: true,
          additionalGuests: 0,
          comment: "",
          passcode: "",
        };
      } catch (error: any) {
        this.systemStore.setDialog({
          visible: true,
          title: "",
          content: error.response ? error.response.data.message : "Fehler",
        });
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
        <span class="label-text text-stone-900">{{ $t("form.name") }}*</span>
      </label>
      <input
        v-model.lazy="form.name"
        type="text"
        class="input input-bordered w-full bg-white rounded-sm"
      />
    </div>
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text text-stone-900">{{ $t("form.email") }}*</span>
      </label>
      <input
        v-model.lazy.trim="form.email"
        type="text"
        class="input input-bordered w-full bg-white rounded-sm"
      />
    </div>
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text text-stone-900">{{ $t("form.rsvp") }}*</span>
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
            class="inline-flex justify-center items-center w-full p-4 bg-white border border-stone-900 rounded-sm cursor-pointer peer-checked:border-stone-900 peer-checked:text-white peer-checked:bg-stone-900 hover:text-gray-600 hover:bg-gray-100"
          >
            <div class="block">
              <div class="w-full font-semibold capitalize">
                {{ $t("form.yes") }}
              </div>
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
            class="inline-flex justify-center items-center w-full p-4 bg-white border border-stone-900 rounded-sm cursor-pointer peer-checked:border-stone-900 peer-checked:text-white peer-checked:bg-stone-900 hover:text-gray-600 hover:bg-gray-100"
          >
            <div class="block">
              <div class="w-full font-semibold capitalize">
                {{ $t("form.no") }}
              </div>
            </div>
          </label>
        </li>
      </ul>
    </div>

    <div class="form-control w-full" v-if="form.isAttending !== 'false'">
      <label class="label">
        <span class="label-text text-stone-900"
          >{{ $t("form.additionalGuest") }}*</span
        >
      </label>
      <div class="flex justify-between gap-2">
        <button
          :class="`btn btn-square btn-outline rounded-sm   text-lg  ${
            form.additionalGuests === 0
              ? 'btn-disabled'
              : 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white hover:border-stone-900'
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
          class="btn btn-square btn-outline rounded-sm border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white hover:border-stone-900 text-lg"
          type="button"
          @click="addAddtionalGuest"
        >
          +
        </button>
      </div>
    </div>

    <div class="form-control w-full">
      <label class="label">
        <span class="label-text text-stone-900">{{ $t("form.comment") }}</span>
      </label>
      <textarea
        v-model.lazy="form.comment"
        class="textarea textarea-bordered h-24 bg-white rounded-sm"
      ></textarea>
    </div>
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text text-stone-900">Passcode*</span>
      </label>
      <input
        v-model.lazy="form.passcode"
        type="text"
        :placeholder="$t('form.checkInvitation')"
        class="input input-bordered w-full bg-white rounded-sm"
      />
    </div>
    <button
      type="submit"
      :class="`${
        isLoading ? 'loading' : ''
      } btn mt-4 btn-block rounded-sm btn-outline border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white hover:border-stone-900 capitalize`"
    >
      {{ $t("form.submit") }}
    </button>
  </form>
</template>
