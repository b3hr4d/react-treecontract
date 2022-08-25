import { init, Models, RematchDispatch, RematchRootState } from '@rematch/core'
import type {
  ContractModel,
  DatabaseModel,
  ProviderModel,
  SettingsModel,
} from './models'
import { contract, database, provider, settings } from './models'

export type Store = typeof store

export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>

export interface RootModel extends Models<RootModel> {
  database: DatabaseModel
  contract: ContractModel
  provider: ProviderModel
  settings: SettingsModel
}

export const models: RootModel = {
  provider,
  settings,
  database,
  contract,
}

const store = init({ models })

export default store
