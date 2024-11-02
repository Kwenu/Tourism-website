import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';
import emailRoute from './routes/email.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const coreOptions = {
    origin: true,
    credentials: true
}

// Database connection
mongoose.set("strictQuery", false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected");
    } catch (err) {
        console.log("Database connection failed");
    }
}

// Middleware
app.use(express.json());
app.use(cors(coreOptions));
app.use(cookieParser());
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);
app.use('/api/v1/email', emailRoute);

app.listen(port, () => {
    connect();
    console.log(`Server is running on port`, port );
})

app.get('/', (req, res) => {
    res.send('Hello World');
    // console.log(res);
})