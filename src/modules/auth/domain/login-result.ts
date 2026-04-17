/** Respuesta de login alineada a un access token Bearer. */
export type LoginResult = {
  accessToken: string;
  tokenType: 'Bearer';
  /** Segundos de vida del token (mismo valor que se usó al firmar). */
  expiresInSec: number;
  user: {
    id: number;
    username: string;
  };
};
