import useUserData, { registerDatabase } from 'context/hooks/useDatabase'
import { setLoading } from 'context/hooks/useSettings'
import { contract } from 'context/models/database'
import { address } from 'contracts'
import { randomAddress } from 'helpers'
import { useCallback } from 'react'

const useUserContract = () => {
  const { userLength } = useUserData()

  const findTree = useCallback(
    (user: string) => contract.findLegsAmount(user),
    [],
  )

  const findAddress = useCallback(
    (id = userLength) => address(id),
    [userLength],
  )

  const register = useCallback(
    (ref: number) => {
      const user = findAddress()
      const referrer = address(ref)
      registerDatabase(user, referrer)
    },
    [findAddress],
  )

  const findRandomRef = useCallback(
    async (id = userLength - 1): Promise<string> => {
      const ref = randomAddress(id)
      if (contract.isFree(ref)) {
        return ref
      } else {
        return await findRandomRef(id)
      }
    },
    [userLength],
  )

  const random = useCallback(async () => {
    const user = findAddress()
    const referrer = await findRandomRef()
    registerDatabase(user, referrer)
  }, [findAddress, findRandomRef])

  const loop = useCallback(
    async (num = 300) => {
      setLoading(true)
      for (let i = userLength; i < userLength + num; i++) {
        const user = address(i)
        const referrer = await findRandomRef(i - 1)
        registerDatabase(user, referrer)
      }
    },
    [findRandomRef, userLength],
  )

  return {
    register,
    loop,
    random,
    findTree,
  }
}

export default useUserContract
