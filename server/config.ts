import dotenv from 'dotenv'
dotenv.config()

export const port = process.env.DB_PORT
export const user = process.env.DB_USER
export const pass = process.env.DB_PASS