import express from "express";
import {Notes} from '../Model/Notes.js'
const router = express.Router();

//Routes to save a new Note

router.post('/', async (req, resp) => {
    try {
        if (!req.body.topic || !req.body.status || !req.body.Notes) {
            return resp.status(400).send({ message: "Enter all details!" });
        }
        const NotesVariable = {
            topic: req.body.topic,
            status: req.body.status,
            Notes: req.body.Notes
        };
        const Notes = await Notes.create(NotesVariable);
        return resp.status(201).send(Notes);
    } catch (error) {
        console.log(error.message);
        return resp.status(500).send({ message: error.message });
    }
});

//Routes to get Notes

router.get('/', async (req, resp) => {
    try {
        const Notes = await Notes.find({});
        return resp.status(200).json({
            count: Notes.length,
            data: Notes
        });
    } catch (error) {
        console.log(error.message);
        return resp.status(400).send({ message: error.message });
    }
});

//Route to get one Note
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;//fetch data from database
        const Note = await Notes.findById(id);
        return res.status(201).json(Note);

    } catch (error) {
        console.log(`Error message : ${error.message}`);
        return res.status(500).send({ message: error.message });
    }
});

//Routes to update a Note
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.topic || !req.body.status || !req.body.Notes) {
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

//Deleting a Note
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Notes.findByIdAndDelete(id);
        if (!result) {
            return res.send(400).json({ message: 'Note could not be deleted!' });
        }
        return res.status(200).send({ message: 'Note deleted successfully!' });
    } catch (error) {
        console.log(error.message);
        return res.status(404).send({ message: error.message });
    }
});

export default router;