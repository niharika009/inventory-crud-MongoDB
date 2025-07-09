const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables
const uri = process.env.MONGO_URI;
async function connectDB() {
try {
await mongoose.connect(uri);
console.log('✅ MongoDB connected');
} catch (err) {
console.error('❌ MongoDB connection error:', err);
process.exit(1); // Optional: Exit if initial connection fails
}
}
module.exports = connectDB;