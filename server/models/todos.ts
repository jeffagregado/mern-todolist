import mongoose from 'mongoose'

const Schema = mongoose.Schema

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

const Todos = mongoose.model('Todos', todoSchema)

export default Todos
