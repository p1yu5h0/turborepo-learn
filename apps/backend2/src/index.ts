import express from "express";

const app = express()

app.get("/", (req, res) => {
    console.log('port 3003 (backend 2) hit by server')
    res.json({
        message: "hello world"
    });
})

app.listen('3003', () => {
    console.log("started express server2 at backend 3003");
})