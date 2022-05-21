import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import organizationRouter from './router/organization'
const PORT = process.env.PORT || 8000
import logger from './utility/Logger'
import createServer from './utility/common'
import AppError, { errorHandler } from './core/errorHandling/AppError'
import { resolveOrganisation } from './core/middleware/utility'

process.on('uncaughtException', (err: any) => {
  console.log(err.name, err.message, err)
  console.log('Uncaught Exception. Shutting Down...')
  process.exit(1)
})

const app = express()
app.use(express.json())
app.use(cors())
app.use(logger.requestLogger)

app.use(resolveOrganisation)
app.use('/organisations', organizationRouter)

app.all('*', (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server`, 404))
})
app.use(errorHandler)
createServer(app, PORT)
process.on('unhandledRejection', (err: any) => {
  console.log(err.name, err.message, err)
  console.log('Unhandled Rejection. Shutting Down...')
  process.exit(1)
})
