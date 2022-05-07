const express = require('express')
const PORT = process.env.PORT || 3001 
const cors = require('cors')
const app = express()
// const AppRouter = require('./routes/AppRouter')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use('/api', AppRouter)
app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.listen(PORT, () => {console.log(`Express server listening on port ${PORT}`)})