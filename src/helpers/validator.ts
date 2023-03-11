import type { Form } from "@/interfaces/Form";

const validate = (form: Form): string => {
  if (form.name.length < 3) {
    return "Bitte Namen eingeben";
  }
  if (
    !String(form.email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return "Bitte gültige E-Mail-Adresse eingeben";
  }
  if (form.additionalGuests < 0) {
    return "Bitte angeben, ob weitere Personen kommen werden";
  }
  if (form.passcode !== import.meta.env.VITE_PASSCODE) {
    return "Bitte Passcode kontrollieren";
  }
  return "";
};

export default validate;
