import express, { Response, Request } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes/todoRoutes'
import {user, pass, port} from './config'

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: '*',
  })
)

// connect to mongodb
const dbURI = `mongodb+srv://${user}:${pass}@learningmern.yhqx6.mongodb.net/todolist?retryWrites=true&w=majority`

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result: any) => {
    app.listen(port)
    console.log('Connected to MongoDB Atlas')
    console.log(`[server]: Server is running at https://localhost:${port}:`)
  })
  .catch((err: any) => console.log(err))

// middleware
// app.use(express.urlencoded({ extended: true }))

// routes
app.get('/', (req: Request, res: Response) => {
  res.redirect('./todos')
})

app.use('/todos', todoRoutes)

export {}
