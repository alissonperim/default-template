import { userRouter } from '@users/routes'
import { Router } from 'express'

const router = Router()
const VERSION = 'v1'

router.use(`/${VERSION}/users`, userRouter)

export { router }
