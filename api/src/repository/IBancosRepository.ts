import { Banco } from "../entity/banco";

export interface IBancosRepository {
    ObterTodosOsBancos(): Promise<Banco[]>
    ObterBancoPorCodigo(codigo_compensacao: number): Promise<Banco | null>
}