import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import routes from './routes'

const server = express()

const PORT = 3333

const dbUrl = 'mongodb+srv://dba:eGnlhE2QNJtAbIt1@cluster0-e9kmt.mongodb.net/tindev?retryWrites=true&w=majority'
mongoose.connect(dbUrl, {
  useNewUrlParser: true
})

server.use(express.json())
server.use(cors())
server.use(routes)

server.listen(PORT, (): void => {
  console.log(`[SERVER] Running at http://localhost:${PORT}`)
})
