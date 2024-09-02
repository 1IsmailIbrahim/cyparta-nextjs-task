export interface IProfile {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  bio?: string | null;
  cover?: string;
  image?: string;
}
