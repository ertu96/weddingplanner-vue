export interface Form {
  name: string;
  email: string;
  isComing: boolean | "yes" | "no";
  additionalGuests: number;
  comment: string;
  passcode: string;
}
