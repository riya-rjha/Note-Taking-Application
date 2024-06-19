import mongoose from 'mongoose';
const { Schema } = mongoose;

const BlogSchema = new Schema(
    {
        topic: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        Blogs: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

export const Blogs = mongoose.model('Cat',BlogSchema);
