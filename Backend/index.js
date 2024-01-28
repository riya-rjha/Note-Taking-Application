//Express helps manage servers and routes
import 'dotenv/config'
import { mongoose } from 'mongoose';
import express from "express";
const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(202).send('Welcome to my Note Making Application');
});

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