console.log('at least got here')
const express = require('express')
const cors = require('cors')
const app = express()
var path = require('path');
app.use(express.static('build'))
app.use(cors())
app.use(express.json())

const possible_pages = ['', 'projects', 'leetcode', 'youtube-channel']


app.get('/:id', (request, response) => {
    console.log('here')
    if (possible_pages.includes(request.params.id)) {
        console.log(__dirname + '/build' + '/index.html')
        const index = path.join(__dirname, 'build', 'index.html')
        response.sendFile(index);
    } else {
        response.status(404).send({ error: 'Page Not Found' })
    }

})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
