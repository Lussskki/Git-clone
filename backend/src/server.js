import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

// Routes
import gitRoute from './routes/gitRoute.js'
app.use('/api/git', gitRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`Server running on a port 3000`)
})