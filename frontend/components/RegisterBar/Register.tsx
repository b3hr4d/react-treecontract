import { Card, Stack } from '@mui/material'
import { registerUser } from 'context/hooks/useContract'
import useDatabase from 'context/hooks/useDatabase'
import useSettings from 'context/hooks/useSettings'
import { utils } from 'ethers'
import { ChangeEvent, useCallback, useState } from 'react'
import TButton from 'theme/elements/TButton'
import TInput from 'theme/elements/TInput'

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const { user } = useSettings()

  const [ref, setRef] = useState(user)
  const [amount, setAmount] = useState('1')

  const { userLength } = useDatabase()

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setRef(value)
  }

  const registerHandler = useCallback(() => {
    const value = utils.parseEther(amount)
    registerUser(ref, value)
  }, [ref, amount])

  return (
    <Card>
      <Stack p={1} direction="row" justifyContent="center" spacing={1}>
        <TInput
          type="text"
          label="Referrer"
          placeholder="referrer"
          value={ref}
          max={userLength - 1}
          onChange={inputHandler}
        />
        <TInput
          type="number"
          label="Amount"
          placeholder="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <TButton onClick={registerHandler}>Register</TButton>
      </Stack>
    </Card>
  )
}

export default Register
