//Express helps manage servers and routes
import 'dotenv/config'
import { mongoose } from 'mongoose';
import express from "express";
import BlogsRoute from './Routes/routes.js'
import cors from 'cors'
import authRoutes from './Routes/auth.js'
const app = express();

app.use(cors());

//Middleware to parse the request body

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(202).send('Welcome to my Blog Making Application');
});

app.use('/', BlogsRoute);
app.use('/register', authRoutes);

//Connecting to a Database (MongoDB)
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.mongoDBURL);
        console.log('Connected to Database');
        app.listen(process.env.PORT, () => {
            console.log(`App is listening to PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.log(error.message);
    }
}

connectToDatabase();    