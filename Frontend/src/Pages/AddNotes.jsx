import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoChevronBackCircle } from 'react-icons/io5';
import Spinner from '../Components/Spinner.jsx';
import '../index.css';
import axios from 'axios';

const AddNotes = () => {
  const [topic, setTopic] = useState('');
  const [status, setStatus] = useState('');
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const data = { topic, status, notes };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await axios.post('http://localhost:5555/notes/', data);
      setIsLoading(false);
      navigate('/');
    } catch (error) {
      console.error('Error submitting data:', error);
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
            Add a New Note
          </h2>
          <div className='mb-4'>
            <label className='block text-lg font-semibold text-purple-600 mb-2' htmlFor='Topic'>
              Topic:
            </label>
            <input
              type='text'
              id='Topic'
              className='w-full p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              placeholder='Enter topic'
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
              placeholder='Enter status'
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
              className='w-full resize-none p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              placeholder='Enter Notes'
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <button
            className='w-full bg-purple-600 text-white p-3 rounded-md font-semibold hover:bg-purple-700 transition duration-200'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddNotes;
