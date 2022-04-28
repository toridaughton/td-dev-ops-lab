const express = require(`express`)
const path = require(`path`)

const app = expres()
app.use(express.json())

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Operating on Humility ${port}`))