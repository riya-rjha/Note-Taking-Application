import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Components/Spinner.jsx';
import { Link } from 'react-router-dom';
import { IoChevronBackCircle } from 'react-icons/io5';

const EditNotes = () => {
  const [topic, setTopic] = useState('');
  const [status, setStatus] = useState('');
  const [Notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const URL = `https://notes-tracker.onrender.com/notes/${id}`;
  const data = { topic, status, Notes };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(URL);
        setTopic(response.data.topic);
        setStatus(response.data.status);
        setNotes(response.data.notes);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching note details:', error);
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [URL]);

  const handleEdit = async () => {
    try {
      setIsLoading(true);
      await axios.put(URL, data);
      setIsLoading(false);
      navigate('/');
    } catch (error) {
      console.error('Error updating note:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-purple-50 flex items-center justify-center p-4'>
      <div className='absolute top-5 left-5'>
        <Link to='/'>
          <IoChevronBackCircle className='text-4xl text-purple-600 hover:text-purple-800 transition-transform transform hover:scale-105' />
        </Link>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-lg'>
          <h2 className='text-2xl font-bold text-purple-700 mb-6 text-center'>
            Edit Notes
          </h2>
          <div className='mb-4'>
            <label className='block text-lg font-semibold text-purple-600 mb-2' htmlFor='Topic'>
              Topic:
            </label>
            <input
              type='text'
              id='Topic'
              className='w-full p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-lg font-semibold text-purple-600 mb-2' htmlFor='Status'>
              Status:
            </label>
            <input
              type='text'
              id='Status'
              className='w-full p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label className='block text-lg font-semibold text-purple-600 mb-2' htmlFor='Notes'>
              Notes:
            </label>
            <textarea
              id='Notes'
              className='w-full h-[150px] p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none'
              value={Notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <button
            className='w-full bg-purple-600 text-white p-3 rounded-md font-semibold hover:bg-purple-700 transition duration-200'
            onClick={handleEdit}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default EditNotes;
