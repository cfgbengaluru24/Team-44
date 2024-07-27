require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGOAPI; // Use the correct environment variable
        if (!mongoURI) {
            throw new Error('MONGOAPI is not defined in .env file');
        }
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
