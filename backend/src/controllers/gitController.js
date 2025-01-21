import fs from 'fs'
import path from 'path'

export const initRepo = (directoryPath) => {
    try {
        // Validate the folder path
        validateFolderPath(directoryPath)

        // Path for the `.git` directory
        const gitDir = path.join(directoryPath, '.git')

        // Check if `.git` folder already exists
        if (fs.existsSync(gitDir)) {
            throw new Error('.git folder already exists in this directory')
        }

        // Create the `.git` directory structure
        fs.mkdirSync(gitDir)
        fs.mkdirSync(path.join(gitDir, 'objects'))
        fs.mkdirSync(path.join(gitDir, 'refs'))
        fs.writeFileSync(path.join(gitDir, 'HEAD'), 'ref: refs/heads/master\n')

        console.log('Repository initialized successfully!')
    } catch (err) {
        console.error(`Error initializing repository: ${err.message}`)
        process.exit(1) 
    }
}

// Function to validate the folder path
function validateFolderPath(folderPath) {
    if (!fs.existsSync(folderPath)) {
        console.log(`Path does not exist. Creating folder at: ${folderPath}`)
        fs.mkdirSync(folderPath, { recursive: true }) 
    } else {
        // Checks if the folder is writable
        try {
            fs.accessSync(folderPath, fs.constants.W_OK)
        } catch (err) {
            throw new Error('Folder exists but is not writable. Check permissions.')
        }

        // Checks if the folder is empty
        const folderContents = fs.readdirSync(folderPath)
        if (folderContents.length > 0) {
            console.log(
                `Warning: The folder is not empty. It contains the following files: ${folderContents.join(', ')}`
            )
        }
    }
}
