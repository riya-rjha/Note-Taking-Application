//Express helps manage servers and routes
import 'dotenv/config'
import { mongoose } from 'mongoose';
import express from "express";
import { Notes } from './Notes Model/model.js';

const app = express();

//Middleware to parse the request body
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(202).send('Welcome to my Note Making Application');
});

//Routes to save a new note

app.post('/notes', async (req, resp) => {
    try {
        if (!req.body.topic || !req.body.status || !req.body.notes) {
            return resp.status(400).send({ message: "Enter all details!" });
        }
        const notesVariable = {
            topic: req.body.topic,
            status: req.body.status,
            notes: req.body.notes
        };
        const notes = await Notes.create(notesVariable);
        return resp.status(201).send(notes);
    } catch (error) {
        console.log(error.message);
        return resp.status(500).send({ message: error.message });
    }
})

//Routes to get a note

app.get('/notes', async (req, resp) => {
    try {
        const notes = await Notes.find({});
        return resp.status(200).json({
            count: notes.length,
            data: notes
        });
    } catch (error) {
        console.log(error.message);
        return resp.status(400).send({ message: error.message });
    }
})

//Routes to get update a note
app.put('/notes/:id', async (req, res) => {
    try {
        if (!req.body.topic || !req.body.status || !req.body.notes) {
            return res.status(500).send({ message: 'Send all the required details!' });
        }
        const { id } = req.params;
        const result = await Notes.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(500).json({ message: 'Notes not found!' })
        }
        return res.status(200).send({ message: 'Notes updated successfully' });
    }
    catch (err) {
        console.log(`Error message : ${err.message}`);
        return res.status(500).send({ message: err.message });
    }
});

//Deleting a note
app.delete('/notes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Notes.findByIdAndDelete(id, req.body);
        if (!result) {
            return res.send(400).json({ message: 'Note could not be deleted!' });
        }
        return res.status(200).send({ message: 'Note deleted successfully!' });
    } catch (error) {
        console.log(error.message);
        return res.status(404).send({ message: error.message });
    }
});


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