import {Request, Response} from 'express';
import { UserDatabase } from '../data/userDatabase';
import { Authenticator } from '../services/Authenticator';

export async function getProfileById(req: Request, res: Response) {
  try {
    const user = await new UserDatabase().getUserById(req.params.id)
    const token = req.headers.auth as string
    await Authenticator.getTokenData(token)

    res.status(200).send({
      message: "Sucesso!",
      user
    })
  } catch (error) {
    res.status(400).send({
      message: error.sqlMessage || error.message
    })
  }
}