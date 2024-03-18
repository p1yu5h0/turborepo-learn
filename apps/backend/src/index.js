const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

app.get("/", (req, resp) => {
    console.log('port 3002 hit by server')
    resp.json({
        msg: "working well backend"
    })
})

app.listen('3002', () => {
    console.log("started express server");
})