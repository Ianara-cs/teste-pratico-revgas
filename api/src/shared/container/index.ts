import { container } from 'tsyringe'
import { IBancosRepository } from '../../repository/IBancosRepository'
import { BancosRepository } from '../../repository/BancosRepository'

export enum INJECT {
    BANCOS_REPOSITORY = 'BANCOS_REPOSITORY'
  }

container.registerSingleton<IBancosRepository>(
    INJECT.BANCOS_REPOSITORY,
    BancosRepository
)