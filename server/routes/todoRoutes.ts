import express from 'express'
import todoController from '../controllers/todoController'

const router = express.Router()

const app = express()

router.get('/', todoController.todo_index)
router.post('/', todoController.todo_post)
router.delete('/:id', todoController.todo_delete)

//module.exports = router
export default router
