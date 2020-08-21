import * as jwt from 'jsonwebtoken';

export abstract class Authenticator {
  private static getExpiresIn(): number {
    return Number(process.env.ACCESS_TOKEN_EXPIRES_IN);
  }

  static generateToken(data: AuthenticationData) : string {
    return jwt.sign(
      data,
      process.env.JWT_KEY as string,
      {expiresIn: Authenticator.getExpiresIn()})
  }

  static getTokenData (token: string): AuthenticationData {
    const data = jwt.verify(
      token,
      process.env.JWT_KEY as string,
    ) as any;
    return {
      id: data.id,
    }
  }
}

interface AuthenticationData {
  id: string,
}