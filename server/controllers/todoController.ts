import { Request, Response } from 'express'
import Todos from '../models/todos'

const todo_index = (req: Request, res: Response) => {
  Todos.find()
    .sort({ createdAt: -1 })
    .then((result: any) => {
      res.json(result)
    })
    .catch((error: any) => {
      console.log(error)
    })
}

const todo_post = (req: Request, res: Response) => {
  const newTodo = new Todos(req.body)

  newTodo
    .save()
    .then((result: any) => {
      res.json(result)
      //res.redirect('/todos')
    })
    .catch((error: any) => {
      console.log(error)
    })
}

const todo_delete = (req: Request, res: Response) => {
  const id = req.params.id

  Todos.findByIdAndDelete(id)
    .then((result: any) => {
      res.json({ remove: true })
    })
    .catch((error: any) => {
      console.log(error)
    })
}

const todoController = {
  todo_index,
  todo_post,
  todo_delete,
}

export default todoController
