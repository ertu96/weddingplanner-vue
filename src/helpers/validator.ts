import type { Locale } from "@/enums/Locale";
import type { Form } from "@/interfaces/Form";
import { messages } from "./messages";

const validate = (form: Form, locale: Locale): string => {
  if (form.name.length < 3) {
    return messages[locale].form.errorMessages.name;
  }
  if (
    !String(form.email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return messages[locale].form.errorMessages.email;
  }
  if (form.additionalGuests < 0) {
    return messages[locale].form.errorMessages.additionalGuest;
  }
  if (form.passcode !== import.meta.env.VITE_PASSCODE) {
    return messages[locale].form.errorMessages.passcode;
  }
  return "";
};

export default validate;
