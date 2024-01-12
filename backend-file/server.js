import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import morgan from 'morgan';
// import connectDB from '../config/db.js';
const port = process.env.PORT || 5000;
const mongoString = process.env.MONGO_URI
const app = express();
mongoose.connect(mongoString)
const database = mongoose.connection
import userRoutes from './routes/userRoutes.js';
import productRouter from './routes/api/productRoute.js';

app.use (morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extented: true}));

app.use(cookieParser());
// import { connect } from 'mongoose';

// connectDB();

app.use('/api/users', userRoutes);
app.use('/api/product', productRouter);


if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    );
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....');
    });
  }


app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server stared on port ${port}`));

database.on ('error',(error) => {
    console.log(error)
})
database.once('connected' , ()=>{
    console.log('Database Connected')
})

