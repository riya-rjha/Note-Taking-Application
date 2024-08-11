import mongoose from 'mongoose';
const { Schema } = mongoose;

const NoteSchema = new Schema(
    {
        topic: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        notes: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

export const Notes = mongoose.model('cats',NoteSchema);
