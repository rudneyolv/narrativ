/** @format */

export interface RegisterUser {
  username: string;
  password: string;
  confirm_password: string;
  email: string;
}

export interface LoginUser {
  email: string;
  password: string;
}
