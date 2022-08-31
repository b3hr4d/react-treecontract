import { init, Models, RematchDispatch, RematchRootState } from '@rematch/core'
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading'
import contract from './models/contract'
import database from './models/database'
import provider from './models/provider'
import settings from './models/settings'

export type Store = typeof store

type FullModel = ExtraModelsFromLoading<RootModel>

export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel, FullModel>

export interface RootModel extends Models<RootModel> {
  database: typeof database
  contract: typeof contract
  provider: typeof provider
  settings: typeof settings
}

export const models: RootModel = {
  provider,
  settings,
  database,
  contract,
}

const store = init<RootModel, FullModel>({ models, plugins: [loadingPlugin()] })

export default store
