import express from 'express'
import cors from 'cors'

import routes from './routes'

const server = express()

const PORT = 3333

server.use(express.json())
server.use(cors())
server.use(routes)

server.listen(PORT, (): void => {
  console.log(`[SERVER] Running at http://localhost:${PORT}`)
})
