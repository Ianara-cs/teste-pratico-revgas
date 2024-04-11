import { Request, Response } from "express";
import { container } from "tsyringe";
import { BancosService } from "../service/BancosService";

const bancosService = container.resolve(BancosService)

export class BancoController {
    

    async obterTodosOsBancos(req: Request, res:Response): Promise<Response> {
        const bancos = await bancosService.obterTodosOsBancos()
        return res.status(200).json(bancos)
    }

    async  ObterBancoPorCodigo(req: Request, res:Response): Promise<Response> {
        const {cod} = req.params
        const banco = await bancosService.ObterBancoPorCodigo(Number(cod))

        return res.status(200).json(banco)
    }
}