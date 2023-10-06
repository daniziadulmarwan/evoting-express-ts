export type UserType = {
  id: number;
  fullname: string;
  password: string;
  password_text: string;
  role: ROLE;
  status: STATUS;
};

enum ROLE {
  ADMIN,
  VOTER,
}

enum STATUS {
  YES,
  NO,
}
