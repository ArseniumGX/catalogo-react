import fs from 'fs'
const pathFile = `${process.cwd()}/server/data/list.json`

const load = () => JSON.parse(fs.readFileSync(pathFile, 'utf-8'))
const save = content => fs.writeFileSync(pathFile, JSON.stringify(content))

export { load, save }
