import type { Locale } from "@/enums/Locale";

export type Messages = {
  [key in Locale]: {
    home: {
      greeting: string;
      datetime: string;
      hopeToSeeYou: string;
      buttons: {
        schedule: string;
        rsvp: string;
      };
    };
    form: {
      name: string;
      email: string;
      rsvp: string;
      yes: string;
      no: string;
      additionalGuest: string;
      comment: string;
      passcode: string;
      submit: string;
      checkInvitation: string;
      errorMessages: {
        name: string;
        email: string;
        additionalGuest: string;
        passcode: string;
      };
    };
    dialog: {
      submit: {
        title: string;
        message: string;
      };
      error: string;
    };
  };
};
