require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors');
const connectDB = require('./dbs'); // Import the DB connection function

const app = express();

connectDB(); // Connect to MongoDB

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/question', require('./routes/question.js'));


app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
