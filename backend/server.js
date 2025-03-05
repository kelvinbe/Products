import express from 'express'

import dotenv from 'dotenv'
import { ConnectDB } from './config/db.js'


dotenv.config()

const app = express()


app.get("/", (req, res) => {
    res.send("Server is ready")
})


app.listen(5000, () => {
    ConnectDB()
    console.log('Server http://localhost:5000')
})

// 4tKxhzDg1hHkpj4d