import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jobsRouter from './routes/jobs.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Job Board API running'));
app.use('/api/jobs', jobsRouter);

const start = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jobboard';
    await mongoose.connect(uri, {});
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(`🚀 Server listening on http://localhost:${PORT}`));
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

start();
