import express from "express";
import {NUMBER, add, subtract} from "@repo/common/config";

const app = express()

app.get("/", (req, res) => {
    console.log('port 3003 (backend 2) hit by server')
    const c = add(4, 5);
    res.json({
        message: "hello world",
        number: NUMBER,
        c: c,
    });
})

app.listen('3003', () => {
    console.log("started express server2 at backend 3003");
})