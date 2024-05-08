import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import questionRoutes from './routes/Questions.js';
import userRoutes from './routes/users.js';
import answerRoutes from './routes/Answers.js';

// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors(
  {
    origin:["https://deploy-mern-1whq.vercel.app"],
    methods:["POST","GET"],
    credentials: true
  }
));

app.get('/', (req, res) => {
  res.send("This is a Tech Solver API");
  res.json("Hello")
});

app.use('/user', userRoutes);
app.use('/questions', questionRoutes);
app.use('/answer', answerRoutes);

const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.CONNECTION_URL;

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err.message);
  });

