import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();
const app = express();

import authRoutes from './routes/auth.js';

app.use(cors());
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

app.get("/", (req, res) => res.send("<h1>Hello from server</h1>"))
app.use("/", authRoutes);

//Db connection
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server is running at http://127.0.0.1:${PORT}`)))
  .catch((err) => console.log(err));