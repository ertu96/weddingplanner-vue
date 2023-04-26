export interface Guest {
  id: number;
  name: string;
  email: string;
  attending: boolean;
  additionalGuests: number;
  comment: string;
  locale: string;
}
