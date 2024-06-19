import express from "express";
import {Blogs} from '../Blogs Model/model.js'
const router = express.Router();

//Routes to save a new Blog

router.post('/', async (req, resp) => {
    try {
        if (!req.body.topic || !req.body.status || !req.body.Blogs) {
            return resp.status(400).send({ message: "Enter all details!" });
        }
        const BlogsVariable = {
            topic: req.body.topic,
            status: req.body.status,
            Blogs: req.body.Blogs
        };
        const Blogs = await Blogs.create(BlogsVariable);
        return resp.status(201).send(Blogs);
    } catch (error) {
        console.log(error.message);
        return resp.status(500).send({ message: error.message });
    }
});

//Routes to get Blogs

router.get('/', async (req, resp) => {
    try {
        const Blogs = await Blogs.find({});
        return resp.status(200).json({
            count: Blogs.length,
            data: Blogs
        });
    } catch (error) {
        console.log(error.message);
        return resp.status(400).send({ message: error.message });
    }
});

//Route to get one Blog
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;//fetch data from database
        const Blog = await Blogs.findById(id);
        return res.status(201).json(Blog);

    } catch (error) {
        console.log(`Error message : ${error.message}`);
        return res.status(500).send({ message: error.message });
    }
});

//Routes to update a Blog
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.topic || !req.body.status || !req.body.Blogs) {
            return res.status(500).send({ message: 'Send all the required details!' });
        }
        const { id } = req.params;
        const result = await Blogs.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(500).json({ message: 'Blogs not found!' })
        }
        return res.status(200).send({ message: 'Blogs updated successfully' });
    }
    catch (err) {
        console.log(`Error message : ${err.message}`);
        return res.status(500).send({ message: err.message });
    }
});

//Deleting a Blog
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Blogs.findByIdAndDelete(id);
        if (!result) {
            return res.send(400).json({ message: 'Blog could not be deleted!' });
        }
        return res.status(200).send({ message: 'Blog deleted successfully!' });
    } catch (error) {
        console.log(error.message);
        return res.status(404).send({ message: error.message });
    }
});

export default router;