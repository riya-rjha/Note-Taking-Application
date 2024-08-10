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
        Notes: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

export const Notes = mongoose.model('Note',NoteSchema);
