import fs from 'fs'
import path from 'path'

export const initRepo = (req, res) => {
    const gitDir = path.join(process.cwd(), 'test', '.git')

    if (fs.existsSync(gitDir)) {
        return res.status(400).json({ message: '.git folder already exists in test' })
    }

    // Create .git directory structure 
    fs.mkdirSync(gitDir)
    fs.mkdirSync(path.join(gitDir, 'objects'))
    fs.mkdirSync(path.join(gitDir, 'refs'))
    fs.writeFileSync(path.join(gitDir, 'HEAD'), 'ref: refs/heads/master\n')

    res.status(200).json({ message: 'Initialized an empty Git-clone repository in test/.git' })
}
