import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
  console.log(`Сервер работает на порту ${process.env.PORT}`);
});
