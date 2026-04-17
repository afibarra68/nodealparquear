/** Fila mínima para autenticación (capa dominio / aplicación). */
export type AuthUserRecord = {
  id: number;
  username: string;
  passwordHash: string;
};
