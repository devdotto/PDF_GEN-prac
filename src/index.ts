import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import { AppRouter } from './routes/index.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
const port = process.env.PORT || 3000;

app.use('/', AppRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
