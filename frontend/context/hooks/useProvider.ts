import { RootState } from 'context/store'
import { useSelector } from 'react-redux'

const useWallet = () => useSelector((state: RootState) => state.provider)

export default useWallet
