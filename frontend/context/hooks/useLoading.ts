import { RootState } from 'context/store'
import { useSelector } from 'react-redux'

const useLoading = () => useSelector((state: RootState) => state.loading)

export const useEffectLoading = () => useLoading().effects

export const useSettingLoading = () => useLoading().effects.settings

export const useContractLoading = () => useLoading().effects.contract

export const useDatabaseLoading = () => useLoading().effects.database

export default useLoading
