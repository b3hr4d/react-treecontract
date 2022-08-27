import store, { RootState } from 'context/store'
import { useSelector } from 'react-redux'

export const updateDatabase = () => store.dispatch.database.UPDATE()

const useDatabase = () => useSelector((state: RootState) => state.database)

export default useDatabase
