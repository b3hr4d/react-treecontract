import fs from 'fs'

export default async (fileName: string, address: string) => {
  const path = `${__dirname}/frontend/contracts/${fileName}/${fileName}.min.json`

  const JsonUserData = require(path)
  const newJson = { abi: JsonUserData, address: '' }
  newJson.address = address

  console.log('writing into: ', path)
  fs.writeFileSync(path, JSON.stringify(newJson))
}
