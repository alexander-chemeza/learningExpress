const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('Not found')
})

app.use((err, req, res, next) => {
    console.error(err.mesage)
    res.type('text/plain')
    res.status(500)
    res.send('Server error')
})

app.listen(port, () => console.log(`Server is listening port ${port}`))