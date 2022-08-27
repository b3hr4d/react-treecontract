import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import useUserContract from 'hooks/useUserContract'
import { useState } from 'react'
import TButton from 'theme/elements/TButton'
import TInput from 'theme/elements/TInput'

interface LoopProps {}

const Loop: React.FC<LoopProps> = () => {
  const [num, setNum] = useState(100)
  const { loop } = useUserContract()

  return (
    <Card>
      <Stack p={1} direction="row" justifyContent="center" spacing={1}>
        <TInput
          type="number"
          fullWidth
          label="Loop"
          placeholder="loop"
          value={num}
          onChange={(e) => setNum(+e.target.value)}
        />
        <TButton onClick={() => loop(num)}>Loop</TButton>
      </Stack>
    </Card>
  )
}

export default Loop
