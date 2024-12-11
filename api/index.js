import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config();


mongoose.connect(process.env.mongo).then(() => {
    console.log('connected to database')
}).catch((err) => {
    console.log(err)
});
const app = express();
app.listen(3003, () => {
    console.log('Server is running on http://localhost:3003 ');
    });

app.use('/api/user',userRoutes);