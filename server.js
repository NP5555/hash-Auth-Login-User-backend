// server.js
const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

const userRoutes = require('./routes/UserRoutes');

app.use('/', userRoutes);

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method, "Middleware is running");
    next();
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
