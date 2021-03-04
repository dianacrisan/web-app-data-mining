const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});

// routes should be moved to another folder
app.get('/', (request, response) => {
    response.send(request.protocol + '://' + request.hostname);
});