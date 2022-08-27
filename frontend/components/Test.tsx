import { Box, Button } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import useContract, {
  registerUser,
  setContract,
} from 'context/hooks/useContract'
import { useEffect, useState } from 'react'
import { UserData } from 'typechain'

interface TestProps {}

const Test: React.FC<TestProps> = () => {
  const { provider, account } = useWeb3React()
  const { userInvest } = useContract()
  const [invest, setInvest] = useState<UserData.InvestStructOutput[]>([])

  useEffect(() => {
    if (account && userInvest)
      userInvest(account)
        .then((res) => setInvest(res))
        .catch((err) => console.log(err))
  }, [account, userInvest])

  useEffect(() => {
    if (provider) setContract(provider)
  }, [provider])

  return (
    <Box>
      <Button
        onClick={() =>
          account
            ? registerUser('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
            : undefined
        }
      >
        Register
      </Button>
      <div>{invest[0]?.amount?.toNumber()}</div>
    </Box>
  )
}

export default Test
