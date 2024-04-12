import { container } from 'tsyringe'
import { IBancosRepository } from '../../modules/banco/repository/IBancosRepository'
import { BancosRepository } from '../../modules/banco/repository/BancosRepository'

// Código para poder fazer a injeção de depedência com 'tsyringe'

export enum INJECT {
    BANCOS_REPOSITORY = 'BANCOS_REPOSITORY'
  }

container.registerSingleton<IBancosRepository>(
    INJECT.BANCOS_REPOSITORY,
    BancosRepository
)