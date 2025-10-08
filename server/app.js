import mongoose from 'mongoose';
import express from 'express';
import { configDotenv } from 'dotenv';
import { router } from './routes/routes.js';
configDotenv({ path: './.env' });
const app = express();
// app.use(cors());

app.use(express.json());
app.use('/api/chatbot', router);
const start = async () => {
  try {
    // await mongoose.connect(process.env.DB_URL);

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Сервер работает на порту ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Error starting server', error);
  }
};

start();
