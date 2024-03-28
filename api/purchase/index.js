import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index.js';

const Purchase = express();

Purchase.use(express.json());
Purchase.use(cors());

Purchase.get('/purchase', function (req, res) {
  res.send('purchase!');
});


routes(Purchase);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    Purchase.listen(PORT, () => {
      console.log(`App is listening to port purchase: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
