import RegisterBar from 'components/RegisterBar'
import TreeCanvas from 'components/TreeCanvas'

import ConnectWallet from 'components/Wallets'
import Layout from 'layouts'

function App() {
  return (
    <Layout>
      <RegisterBar />
      <TreeCanvas />
      <ConnectWallet />
    </Layout>
  )
}

export default App
