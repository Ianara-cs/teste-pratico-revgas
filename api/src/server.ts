import express from 'express'
import "reflect-metadata"
import { createConnection } from './database/data-source'

createConnection()
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const port = 5000

app.listen(port, () => console.log('Running server!'))