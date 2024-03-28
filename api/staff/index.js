import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index.js';

const Staff = express();

Staff.use(express.json());
Staff.use(cors());

Staff.get('/Staff', function (req, res) {
  res.send('Staff!');
});


routes(Staff);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    Staff.listen(PORT, () => {
      console.log(`App is listening to port staff : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
