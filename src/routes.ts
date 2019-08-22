import { Router, Response, Request } from 'express'

import DevsController from './constrollers/DevsController'

const routes = Router()

routes.get('/', (req: Request, res: Response): Response => {
  return res.json({ message: 'TINDEV BACKEND' })
})

routes.post('/devs', DevsController)

export default routes
