import express, { Router } from 'express'
import "reflect-metadata"
import 'express-async-errors'
import { createConnection } from './shared/database/data-source'
import { BancoController } from './modules/banco/controllers/bancosController'
import { errorMiddleware } from './shared/errors/errorMiddleware'
import cors from 'cors'

createConnection()
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const bancosController = new BancoController()
app.get("/bancos", bancosController.obterTodosOsBancos)
app.get("/bancos/:cod", bancosController.ObterBancoPorCodigo)

app.use(errorMiddleware)

const port = 5000

app.listen(port, () => console.log('Running server!'))