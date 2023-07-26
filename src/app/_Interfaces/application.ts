import {User} from "./user";

export interface Application {
  id?: string,
  companyName: string,
  submitedAt?: Date;
  email?: string;
  phoneNumber?: string;
  webSite?: string;
  status?: string;
  user: string;
}
