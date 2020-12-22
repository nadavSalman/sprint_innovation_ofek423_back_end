const express = require("express")
const app = express()
const bodyParser = require("body-parser");

const port = 3000
const userRoutes = require('./routers/users-router');
const groupRoutes = require('./routers/groups-router');
const listRoutes = require('./routers/lists-router');
const itemRoutes = require('./routers/items-router');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes which should handle requests
app.use("/users", userRoutes);
app.use("/groups", groupRoutes);
app.use("/lists", listRoutes);
app.use("/items", itemRoutes);

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;