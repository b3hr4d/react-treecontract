import { Button } from '@mui/material'
import useContract, {
  registerUser,
  setContract,
} from 'context/hooks/useContract'
import { usePriorityProvider } from 'context/hooks/useProvider'
import { useEffect } from 'react'

interface TestProps {}

const Test: React.FC<TestProps> = () => {
  const { provider, account } = usePriorityProvider()
  const { users } = useContract()

  useEffect(() => {
    console.log(account)
    if (account)
      users(account).then((res) => {
        console.log(res)
      })
  }, [users, account])

  useEffect(() => {
    if (provider) setContract(provider)
  }, [provider])

  return (
    <Button onClick={() => (account ? registerUser(account) : undefined)}>
      Register
    </Button>
  )
}

export default Test
