import { Users } from 'contracts'
import database from '.'

export type UserDataState = {
  users: Users
  total: number
  userLength: number
}

export type DatabaseModel = typeof database
