import { User } from '@users/domain/entity/user'
import { NextFunction, Request, Response } from 'express'



interface CreateUserInput extends Request {
    body: User
} 

export const createUserHandler = (req: CreateUserInput, res: Response, next: NextFunction) => {
    const { body } = req
    console.log(body)
    res.status(201).json(body)
} 
