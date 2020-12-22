// todo - הכנס הערה שמתארת את קבוצת הפרטמרים הללו
const express = require("express")
const app = express()
const bodyParser = require("body-parser");

// todo - הכנס הערה שמתארת את קבוצת הפרטמרים הללו
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

// todo - לא השתכנעתי שלא קיימת דרך יותר טובה לעשות זה (לא הגיוני לי שיש מתודה שמקבלת 2 פרמטרים שלא משתמשים בהם)
app.use((error, req, res, next) => {
    // todo - להחליף את המספר 500 במתשנה קבוע עם שם הגיוני
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

// this function is responsible for exporting the app on the specific port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;