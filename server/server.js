const express = require('express')

const app = express();

app.use(express.static(`${__dirname}../`));

app.listen(4555, () => {
    console.log('Server running on port 4555')
})