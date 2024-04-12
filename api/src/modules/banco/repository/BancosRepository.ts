import { Repository } from "typeorm";
import { Banco } from "../entity/banco";
import { IBancosRepository } from "./IBancosRepository";
import { appDataSource } from "../../../shared/database/data-source";

export class BancosRepository implements IBancosRepository {
    private repository: Repository<Banco>

    constructor() {
        this.repository = appDataSource.getRepository(Banco)
    }

    async ObterTodosOsBancos(): Promise<Banco[]> {
        const bancos = await this.repository.find()
        return bancos
    }

    async ObterBancoPorCodigo(codigo_compensacao: number): Promise<Banco | null> {
        const banco = await this.repository.findOneBy({codigo_compensacao})

        return banco
    }
}