import { Router, Response, Request } from 'express'

import DevsController from './constrollers/DevsController'
import LikeController from './constrollers/LikeController'
import DislikeController from './constrollers/DislikeController'

const routes = Router()

routes.get('/', (req: Request, res: Response): Response => {
  return res.json({ message: 'TINDEV BACKEND' })
})

routes.post('/devs', DevsController.store)
routes.post('/devs/:idDev/like', LikeController.store)
routes.post('/devs/:idDev/dislike', DislikeController.store)

export default routes
