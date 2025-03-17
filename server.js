import 'dotenv/config'; // Loads environment variables
import mongoose from 'mongoose';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB URI from .env
const uri = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Basic route
app.get('/', (req, res) => res.send('Server is running!'));

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
