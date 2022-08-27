import { Card, Stack } from '@mui/material'
import useUserContract from 'hooks/useUserContract'
import TButton from 'theme/elements/TButton'

interface RandomProps {}

const Random: React.FC<RandomProps> = () => {
  const { random } = useUserContract()

  return (
    <Card>
      <Stack p={1} direction="row" justifyContent="center" spacing={1}>
        <TButton onClick={() => random()}>Random</TButton>
      </Stack>
    </Card>
  )
}

export default Random
