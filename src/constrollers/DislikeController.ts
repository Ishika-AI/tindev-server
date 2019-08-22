import { Request, Response } from 'express'

import Dev from '../models/DevModel'

const store = async (req: Request, res: Response): Promise<Response> => {
  const { user } = req.headers
  const { idDev } = req.params

  const loggedDev = await Dev.findById(user)
  const targetDev = await Dev.findById(idDev)

  if (!targetDev) {
    return res.status(400).json({ error: 'Dev not exists' })
  }

  loggedDev.dislikes.push(targetDev._id)
  await loggedDev.save()

  return res.json(loggedDev)
}

export default {
  store
}
