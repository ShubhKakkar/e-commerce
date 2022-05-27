const express = require('express');
const serverConfig = require('./configs/server.config');
const PORT = serverConfig.PORT;

const app = express();

app.get('/', (req, res) => {
    res.send("Home Page");
})

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})