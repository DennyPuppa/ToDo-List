const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = 5050;

const start = require('./db');
start()

//Middleware
app.use(cors());
app.use(express.json());

//Routes
const taskRoutes = require('./routes/taskRoutes');

app.use('/', taskRoutes);

//DB Start
app.listen(port, () => {
    console.log(`To do List app porta: ${port}`)
})