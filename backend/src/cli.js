import { initRepo } from './controllers/gitController.js'

const args = process.argv.slice(2)

if (args.length < 1) {
    console.log('Usage: pnpm run lussskki-git init <folderPath>')
    process.exit(1)
}

const command = args[0]

switch (command) {
    case 'init':
        initRepoCommand(args[1])  // Pass folder path as argument
        break
    default:
        console.log(`Unknown command: ${command}`)
}

function initRepoCommand(folderPath) {
    try {
        initRepo(folderPath)  // Initialize repo in the provided folder path
        console.log('Repository initialized successfully!')
    } catch (err) {
        console.error('Error initializing repository:', err.message)
    }
}
