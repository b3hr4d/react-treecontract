import errors from 'contracts/UserData/error.json'

export const errorCompiler = (err: any) => {
  switch (typeof err) {
    case 'string':
      return err.replace(/<[^>]+>/g, '')
    case 'object':
      // eslint-disable-next-line no-case-declarations
      let message = err?.data?.message || err?.message
      console.log(message)
      if (message) {
        const msg = message.replace('execution reverted: ', '')
        if (msg.length === 3) return errors[msg]
        else if (msg.includes('err:')) return msg.replace('err: ', '')
        else if (msg.includes('MetaMask Tx Signature:'))
          return msg.replace('MetaMask Tx Signature: ', '')
        else if (msg.includes('reverted with reason string')) {
          const e = msg.split("'")[1]
          return errors[e]
        } else return msg.replace(/ *\([^)]*\) */g, '')
      } else {
        return 'Error Not Found!'
      }
    default:
      return 'Error Not Found!'
  }
}
