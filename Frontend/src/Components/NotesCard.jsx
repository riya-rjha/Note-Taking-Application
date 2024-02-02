import React, { useState, useEffect } from 'react'
import AddNotes from '../Pages/AddNotes'
import axios from 'axios';
import { FaNoteSticky } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import Spinner from './Spinner';
import { MdDelete } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";

const NotesCard = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_URL = 'http://localhost:5555/notes';
  const getNotes = async () => {
    const response = await axios.get(API_URL);
    // console.log(response);
    setNotes(response.data.data);
  }
  useEffect(() => {
    getNotes();
  }, [])
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex items-center justify-between mt-[100px]">
          <div className="grid ">
            <div className='grid mt-10 ml-10 mr-4 grid-cols-2 gap-8 min-w-[400px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {notes.map((note, index) =>
                <div key={note.id} className='border-cyan-600 text-pretty bg-blue-50 border-4 rounded-md p-6'>
                  <div className='text-2xl text-purple-950'><span className='font-bold'>S.No :</span> {index + 1}</div>
                  <div className='mt-6'><span className='font-bold '>Topic :</span> {note.topic}</div>
                  <div className='mt-4'><span className='font-bold '>Status :</span> {note.status}</div>
                  <div className='mt-4'><span className='font-bold '>Date :</span>{new Date(note.createdAt).toDateString()}</div>
                  {/* {new Date(note.createdAt).toString()} */}
                  <div className='flex items-center justify-evenly mt-6 mr-2 text-4xl'>
                    <FaNoteSticky className='text-purple-950 cursor-pointer' />
                    <MdEdit className='text-green-800 cursor-pointer' />
                    <MdDelete className='text-red-800 cursor-pointer' />
                    <CiCalendarDate className='text-yellow-500 text-5xl cursor-pointer' />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NotesCard