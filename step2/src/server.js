import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 5003

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

// Load routes dynamically (workaround for static import issue)
const authRoutes = (await import('./routes/authRoutes.js')).default
const todoRoutes = (await import('./routes/todoRoutes.js')).default
const authMiddleware = (await import('./middleware/authMiddleware.js')).default

app.use('/auth', authRoutes)
app.use('/todos', authMiddleware, todoRoutes)

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})