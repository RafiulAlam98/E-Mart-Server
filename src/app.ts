import express, { Application, Request, Response } from 'express'
import routes from './app/routes/index'
const app: Application = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use('/api/v1', routes)

export default app
