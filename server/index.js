const express = require(`express`)
const path = require(`path`)

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

// app.get('/style', (req, res) => {
//     res.sendFile(path.join(__dirname, '../styles.css'))
//     rollbar.info('css file served')
// })

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Operating on Humility ${port}`))