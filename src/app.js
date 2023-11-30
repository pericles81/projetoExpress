import express, { response } from 'express'
import ROUTES from './routes.js' 
import cors from 'cors';
import connectDatabase from './database/database.js'


const app = express()

app.use(cors(),express.json())

app.use(ROUTES)

connectDatabase().then(() => { console.log('Banco de dados conectado!') })
  .catch((error) => console.log(error))

export default app