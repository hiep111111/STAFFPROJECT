import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index.js';

const user = express();

user.use(express.json());
user.use(cors());

user.get('/Auth', function (req, res) {
  res.send('Login!');
});

routes(user);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    user.listen(PORT, () => {
      console.log(`App is listening to port user: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
