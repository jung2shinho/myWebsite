// “index.js”: The main entry point for the Express server and configuration initialization
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usersRoutes = require ('./routes/users.js');
const dotenv = require('dotenv').config();

// init middleware express server
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
   console.log(`Server Running on port: http://localhost:${PORT}`)
)
app.use(bodyParser.json()); // indicates that use of json objects

// Route for homepage
app.get('/', (req, res) => {
   res.send('Hello from Homepage.');
} ) 

// Routes for /users
app.use('/users', usersRoutes);


