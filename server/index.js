const express = require(`express`)
const path = require(`path`)
const Rollbar = require('rollbar')

const app = express()
app.use(express.json())

const rollbar = new Rollbar({
  accessToken: '0510d0a882d045a5a0b45a3d622adaf5',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})


// app.get('/style', (req, res) => {
//     res.sendFile(path.join(__dirname, '../styles.css'))
//     rollbar.info('css file served')
// })

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Operating on Humility ${port}`))