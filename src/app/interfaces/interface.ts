export interface UserToken {
  token: string;
  refreshToken: string;
}
export interface DataUser {
  id: string;
  data: string;
}
export interface DataUserRegister {
  id: string;
  username: string;
  passwordSalt: string;
  passwordHash: string;
  name: string;
  lname: string;
  role: string;
}
