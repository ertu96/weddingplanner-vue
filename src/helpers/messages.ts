import type { Locale } from "@/enums/Locale";

export const messages: {
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
  };
} = {
  tr: {
    home: {
      greeting:
        "Merhaba,\nDüğünümüze davetlisiniz.\nKatılabileceğinizi bildirirseniz seviniriz.\n",
      datetime: "11.06.2023 saat 17:00'de",
      hopeToSeeYou: "Sizi görmek için sabırsızlanıyoruz!",
      buttons: {
        schedule: "Program",
        rsvp: "Katılım",
      },
    },
    form: {
      name: "Ad",
      email: "E-posta",
      rsvp: "Katılım",
      yes: "Evet",
      no: "Hayır",
      additionalGuest: "Ek misafir",
      comment: "Açıklamalar",
      passcode: "Şifre",
      submit: "Gönder",
      checkInvitation: "davetiyede yazıyor",
      errorMessages: {
        name: "Lütfen adınızı girin",
        email: "Lütfen geçerli bir e-posta adresi girin",
        additionalGuest: "Lütfen ek misafir sayısını belirtin",
        passcode: "Lütfen şifreyi kontrol edin",
      },
    },
  },
  gb: {
    home: {
      greeting:
        "Hello,\nWe cordially invite you to our wedding.\nPlease let us know if you can attend.\n",
      datetime: "on 11 June 2023 at 5:00 PM",
      hopeToSeeYou: "We hope to see you there!",
      buttons: {
        schedule: "Schedule",
        rsvp: "RSVP",
      },
    },
    form: {
      name: "Name",
      email: "Email",
      rsvp: "RSVP",
      yes: "Yes",
      no: "No",
      additionalGuest: "Additional Guests",
      comment: "Comments",
      passcode: "Passcode",
      submit: "Submit",
      checkInvitation: "check your invitation",
      errorMessages: {
        name: "Please enter your name",
        email: "Please enter a valid email address",
        additionalGuest: "Please indicate the number of additional guests",
        passcode: "Please check the passcode",
      },
    },
  },
  jp: {
    home: {
      greeting:
        "こんにちは、\n私たちは私たちの結婚式にあなたを招待します。\n参加できるかどうか教えてください。\n",
      datetime: "2023年6月11日17:00",
      hopeToSeeYou: "お会いできるのを楽しみにしています！",
      buttons: {
        schedule: "スケジュール",
        rsvp: "参加登録",
      },
    },
    form: {
      name: "名前",
      email: "メール",
      rsvp: "出席",
      yes: "はい",
      no: "いいえ",
      additionalGuest: "同伴者",
      comment: "コメント",
      passcode: "パスコード",
      submit: "送信",
      checkInvitation: "招待状を確認してください",
      errorMessages: {
        name: "名前を入力してください",
        email: "有効なメールアドレスを入力してください",
        additionalGuest: "同伴者の有無を選択してください",
        passcode: "パスコードを確認してください",
      },
    },
  },
  ru: {
    home: {
      greeting:
        "Здравствуйте,\nмы приглашаем вас на нашу свадьбу.\nПожалуйста, дайте знать, сможете ли вы присутствовать.\n",
      datetime: "11 июня 2023 года в 17:00",
      hopeToSeeYou: "Мы надеемся увидеть вас!",
      buttons: {
        schedule: "Программа",
        rsvp: "Ответить",
      },
    },
    form: {
      name: "Имя",
      email: "E-mail",
      rsvp: "Присутствие",
      yes: "Да",
      no: "Нет",
      additionalGuest: "Гости",
      comment: "Комментарий",
      passcode: "Код доступа",
      submit: "Отправить",
      checkInvitation: "Указано в приглашении",
      errorMessages: {
        name: "Пожалуйста, введите имя",
        email: "Пожалуйста, введите действительный адрес электронной почты",
        additionalGuest: "Пожалуйста, укажите, придут ли гости",
        passcode: "Пожалуйста, проверьте код доступа",
      },
    },
  },

  de: {
    home: {
      greeting:
        "Hallo,\nwir laden euch herzlich zu unserer Hochzeit ein.\nBitte gibt Bescheid, ob ihr dran teilnehmen könnt.\n",
      datetime: "am 11.06.2023 um 17:00",
      hopeToSeeYou: "Wir freuen uns auf euch!",
      buttons: {
        schedule: "Programmablauf",
        rsvp: "Anmelden",
      },
    },
    form: {
      name: "Name",
      email: "E-Mail",
      rsvp: "Zusage",
      yes: "Ja",
      no: "Nein",
      additionalGuest: "Weitere Personen",
      comment: "Bemerkungen",
      passcode: "Passcode",
      submit: "Absenden",
      checkInvitation: "steht auf der Einladung",
      errorMessages: {
        name: "Bitte Namen eingeben",
        email: "Bitte gültige E-Mail-Adresse eingeben",
        additionalGuest: "Bitte angeben, ob weitere Personen kommen werden",
        passcode: "Bitte Passcode kontrollieren",
      },
    },
  },
  ar: {
    home: {
      greeting:
        "مرحبا،\nندعوكم لحضور حفل زفافنا.\nيرجى إعلامنا إذا كنتم ستحضرون.\n",
      datetime: "يوم 11 يونيو 2023 الساعة 17:00",
      hopeToSeeYou: "نتطلع لرؤيتكم!",
      buttons: {
        schedule: "برنامج الحفل",
        rsvp: "التسجيل",
      },
    },
    form: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      rsvp: "الرد",
      yes: "نعم",
      no: "لا",
      additionalGuest: "الضيوف الإضافيين",
      comment: "ملاحظات",
      passcode: "رمز المرور",
      submit: "إرسال",
      checkInvitation: "يمكن العثور عليه في الدعوة",
      errorMessages: {
        name: "يرجى إدخال الاسم",
        email: "يرجى إدخال عنوان بريد إلكتروني صالح",
        additionalGuest: "يرجى تحديد ما إذا كانت هناك ضيوف إضافيين",
        passcode: "يرجى التحقق من رمز المرور",
      },
    },
  },
};
