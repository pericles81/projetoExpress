import express, { response } from 'express'
import ROUTES from './routes.js' 
import connectDatabase from './database/database.js'

const app = express()
app.use(express.json())
app.use(ROUTES)

connectDatabase().then(() => { console.log('Banco de dados conectado!') })
  .catch((error) => console.log(error))

export default app