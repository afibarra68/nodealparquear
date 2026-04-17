/** Usuario resuelto tras validar el JWT (Passport). */
export type JwtValidatedUser = {
  userId: number;
  username: string;
};
