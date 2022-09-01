import fs from 'fs'

export default async (fileName: string, address: string) => {
  const abiPath = `${__dirname}/frontend/contracts/${fileName}/${fileName}.min.json`
  const contractErr = `${__dirname}/contracts/${fileName}/error.json`
  const errPath = `${__dirname}/frontend/contracts/${fileName}/error.json`

  const JsonUserData = require(abiPath)
  const newJson = { abi: JsonUserData, address: '' }
  newJson.address = address

  console.log('writing into: ', abiPath)
  fs.writeFileSync(abiPath, JSON.stringify(newJson))

  fs.copyFile(contractErr, errPath, (err) => {
    if (err) {
      console.log('Error Found:', err)
    }
  })
}
