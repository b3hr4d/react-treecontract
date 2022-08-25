import type { UserData } from 'typechain'
import contract from '.'

export type ContractState = UserData

export type ContractModel = typeof contract
