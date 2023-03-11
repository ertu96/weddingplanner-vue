export interface Form {
  name: string;
  email: string;
  isAttending: boolean | "yes" | "no";
  additionalGuests: number;
  comment: string;
  passcode: string;
}
