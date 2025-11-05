import express from 'express'
import cors from 'cors'
import connectDB from './database.js'
import closeDB from './database.js'
import dotenv from 'dotenv'


const app = express()
app.use(
    cors({
        origin: `${process.env.BASE_URL}`,
        credentials: true,
    })
)
dotenv.config()
app.use(express.json())

// API endpoints will eventually go here

const PORT = process.env.PORT || 8000
const server = app.listen(PORT, async () => {
    await connectDB()
    console.log(`Server is running on port ${PORT}`)
})

app.closeServer = async () => {
    await closeDB()
    server.close()
}

export default app