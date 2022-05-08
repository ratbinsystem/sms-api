import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import organizationRouter from './router/organization'
const PORT = process.env.PORT || 8000
import logger from './utility/Logger'
import createServer from './utility/common'
import organisationMiddleware from './middleware/organisationMiddleware'
const app = express()
app.use(express.json())
app.use(cors())
app.use(organisationMiddleware.resolveOrganisation)
app.use(logger.requestLogger)
app.use('/organisations', organizationRouter)
createServer(app, PORT)
