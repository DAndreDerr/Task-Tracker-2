const express = require('express');
const app = express();
const port = 7000;

app.use(express.static('main'));

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`)
})