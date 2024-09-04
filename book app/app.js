const express = require('express');
const connectDB = require('./config/dbConnection');
const port = process.env.PORT || 3000;
const dotenv = require('dotenv');


const app = express();

// Middleware
app.use(express.json());
dotenv.config();


// Connect to the database
connectDB();

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
