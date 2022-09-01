import store, { RootState } from 'context/store'
import { useSelector } from 'react-redux'

export const updateDatabase = () => store.dispatch.database.UPDATE()

export const registerDatabase = (user: string, referrer: string) =>
  store.dispatch.database.registerUser({ user, referrer })

const useDatabase = () => useSelector((state: RootState) => state.database)

export default useDatabase
