import { inject, injectable } from "tsyringe";
import { IBancosRepository } from "../repository/IBancosRepository";
import { Banco } from "../entity/banco";
import { INJECT } from "../shared/container";
import { NotFoundException } from "../errors/AppErrors";

@injectable()
export class BancosService {
    constructor(
        @inject(INJECT.BANCOS_REPOSITORY)
        private bancosRepository: IBancosRepository
    ) {}

    async obterTodosOsBancos(): Promise<Banco[]> {
        const bancos = await this.bancosRepository.ObterTodosOsBancos()
        return bancos;
    }

    async ObterBancoPorCodigo(codigo_compensacao: number): Promise<Banco> {
        const banco = await this.bancosRepository.ObterBancoPorCodigo(codigo_compensacao)

        if (!banco) {
            throw new NotFoundException('Banco não encontrado!')
        }

        return banco
    }
}