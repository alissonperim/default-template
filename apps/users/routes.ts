import { Router } from 'express'
import { createUserHandler } from './handlers/create'
import { schemaValidations } from '@shared/validations'
import { createUserSchema } from './handlers/create/schema'

const router = Router()

router.post('/', schemaValidations(createUserSchema), createUserHandler)

export { router as userRouter }
