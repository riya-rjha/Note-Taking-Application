import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Components/Spinner.jsx';
import { Link } from 'react-router-dom';
import { IoChevronBackCircle } from 'react-icons/io5';

const EditBlogs = () => {

  const [topic, setTopic] = useState('');
  const [status, setStatus] = useState('');
  const [Blogs, setBlogs] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const URL = `https://notes-tracker.onrender.com/notes/${id}`;
  const data = { topic, status, Blogs };

  //Get book of specific Id

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(URL);
        // console.log(response.data);
        setTopic(response.data.topic);
        setStatus(response.data.status);
        setBlogs(response.data.Blogs);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    }
    fetchDetails();
  }, [])

  //Handle Edit button after getting book of particular ID

  const handleEdit = async () => {
    try {
      setIsLoading(true);
      await axios.put(URL, data);
      setIsLoading(false);
      navigate('/');
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  }
  return (
    <div>
      <div className='absolute left-8 top-11'>
        <Link to='/'>
          <IoChevronBackCircle className='-mt-6 text-5xl float-left cursor-pointer hover:shadow-outline' />
        </Link>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="bg-green-100 flex min-w-[460px] items-center justify-center p-10 flex-col w-[450px] m-auto mt-20 mb-20 rounded-md">
          <div className="text-left text-2xl bold">
            Edit Blogs
          </div>
          <input type="text"
            className='border-black w-[416px] mt-6 border-2 outline-none p-2 rounded-md focus:ring focus:border-purple-800 '
            value={topic}
            onChange={(e) => setTopic(e.target.value)} />
          <input type="text"
            className='border-black w-[416px] mt-6 border-2 outline-none p-2 rounded-md focus:ring focus:border-purple-800 '
            value={status}
            onChange={(e) => setStatus(e.target.value)} />
          <textarea
            type='text'
            className='border-black w-[416px] mt-6 border-2 outline-none p-2 rounded-md h-[105px] focus:ring focus:border-purple-800 resize-none'
            value={Blogs}
            onChange={(e) => setBlogs(e.target.value)}
          />
          <button className='p-2 border-2 border-purple-900 text-2xl m-2 rounded-md font-bold text-green-950 transition duration-100 hover:bg-violet-300 hover:text-black delay-75 w-[416px] mt-6'
            onClick={handleEdit}
          >
            Save
          </button>
        </div>
      )}

    </div>
  )
}

export default EditBlogs