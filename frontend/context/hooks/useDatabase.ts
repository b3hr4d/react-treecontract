import store, { RootState } from 'context/store'
import { useSelector } from 'react-redux'

export const registerUser = (user: string, referrer: string) => {
  store.dispatch.database.registerUser({ user, referrer })
}

export const updateDatabase = () => store.dispatch.database.UPDATE()

const useDatabase = () => useSelector((state: RootState) => state.database)

export default useDatabase
