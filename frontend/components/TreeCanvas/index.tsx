import { Box, Card } from '@mui/material'
import Loading from 'components/Loading'
import CustomNode from 'components/TreeCanvas/CustomNode'
import { useCenteredTree } from 'hooks/useCenteredTree'
import useUserTree from 'hooks/useUserTree'
import Tree from 'react-d3-tree'
import Header from './Controller'

interface indexProps {}

const TreeCanvas: React.FC<indexProps> = () => {
  const { translate, loading, containerElem } = useCenteredTree()
  const tree = useUserTree()

  return (
    <Box height="100%" mb={1} ref={containerElem}>
      <Card sx={{ height: translate.height }}>
        <Header />
        {loading ? (
          <Loading {...translate} />
        ) : (
          <Tree
            data={tree}
            pathFunc="step"
            translate={translate}
            orientation="vertical"
            renderCustomNodeElement={(props: any) => <CustomNode {...props} />}
          />
        )}
      </Card>
    </Box>
  )
}

export default TreeCanvas
