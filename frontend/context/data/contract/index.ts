import type { UserData } from 'typechain'

export interface ContractState extends UserData {
  initialized: boolean
}
