export interface Form {
  name: string;
  email: string;
  isAttending: boolean | "yes" | "no" | "true" | "false";
  additionalGuests: number;
  comment: string;
  passcode: string;
}
