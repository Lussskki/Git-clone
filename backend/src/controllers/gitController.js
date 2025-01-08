import fs from 'fs'
import path from 'path'

export const initRepo = (directoryPath) => {
    const gitDir = path.join(directoryPath, '.git')

    if (!fs.existsSync(directoryPath)) fs.mkdirSync(directoryPath, { recursive: true })
    if (fs.existsSync(gitDir)) throw new Error('.git folder already exists')

    fs.mkdirSync(gitDir)
    fs.mkdirSync(path.join(gitDir, 'objects'))
    fs.mkdirSync(path.join(gitDir, 'refs'))
    fs.writeFileSync(path.join(gitDir, 'HEAD'), 'ref: refs/heads/master\n')
}
