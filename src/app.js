const express = require('express');

const {setup} = require('./di-setup');

const app = express();
setup();
//routes

const testRoutes = require('./routes/test.routes');
const bookRoutes = require('./routes/book.routes');

app.use("/api/test", testRoutes);
app.use("/api/book", bookRoutes);

module.exports = app;