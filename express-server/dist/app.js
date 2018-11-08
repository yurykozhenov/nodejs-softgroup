"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const db_1 = require("./db");
const app = express();
const port = 3000;
const db = new db_1.Database();
app.use(express.json());
app.get('/gallery', (req, res) => {
    if (req.query.id) {
        const item = db.read(req.query.id);
        res.send(item);
    }
    else {
        const items = db.read();
        res.send(items);
    }
});
app.get('/gallery/:id', (req, res) => {
    const item = db.read(req.params.id);
    if (!item) {
        res.status(404);
        res.send();
    }
    else {
        res.send(item);
    }
});
app.post('/gallery', (req, res) => {
    console.log(req.body);
    // const items = db.write(req);
    res.status(201).send(req.body);
});
app.use('*', (req, res) => {
    res.send(`
    <html>
        <body>
            <h1>404</h1>
            <h2>Page not found!</h2>
        </body>
    </html>`);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
