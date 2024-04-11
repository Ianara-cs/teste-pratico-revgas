import express, { Router } from 'express'
import "reflect-metadata"
import 'express-async-errors'
import { createConnection } from './database/data-source'
import { BancoController } from './controllers/bancosController'
import { errorMiddleware } from './errors/errorMiddleware'

createConnection()
const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

const bancosController = new BancoController()
app.get("/bancos", bancosController.obterTodosOsBancos)
app.get("/bancos/:cod", bancosController.ObterBancoPorCodigo)

app.use(errorMiddleware)

const port = 5000

app.listen(port, () => console.log('Running server!'))