import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


mongoose.connect(process.env.mongo).then(() => {
    console.log('connected to database')
}).catch((err) => {
    console.log(err)
});
const app = express();
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000 ');
    });