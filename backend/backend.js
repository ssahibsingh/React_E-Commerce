import express from 'express'
import cors from 'cors'
import connectDB from './database.js'
import closeDB from './database.js'
import Product from './product.js'
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


// Supports GET by id (not object _id)
app.get('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id
        const productData = await Product.findOne({ id: productId })

        if(!productData) {
            return res.status(404).json({ message: 'Product not found'})
        }

        res.json(productData)
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
})


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