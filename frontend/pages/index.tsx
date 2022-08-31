import { useWeb3React } from '@web3-react/core'
import RegisterBar from 'components/RegisterBar'
import TreeCanvas from 'components/TreeCanvas'

import ConnectWallet from 'components/Wallets'
import { setContract } from 'context/hooks'
import Layout from 'layouts'
import { useEffect } from 'react'

function App() {
  const { provider } = useWeb3React()

  useEffect(() => {
    if (provider) setContract(provider)
  }, [provider])

  return (
    <Layout>
      <RegisterBar />
      <TreeCanvas />
      <ConnectWallet />
    </Layout>
  )
}

export default App
