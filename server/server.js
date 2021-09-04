import express from 'express'
import routes from './routes.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}))
app.use(routes)

app.listen(3001, () => {
    console.log('API is runnung on port 3001!')
})
