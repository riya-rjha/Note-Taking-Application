import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaNoteSticky } from 'react-icons/fa6';
import { MdEdit, MdDelete } from 'react-icons/md';
import { CiCalendarDate } from 'react-icons/ci';
import Spinner from './Spinner';
import BlogsModal from '../Modals/BlogsModal';
import DatesModal from '../Modals/DatesModal';
import Searchbar from './Searchbar';

const BlogsCard = () => {
  const [Blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [BlogsModal, setBlogsModal] = useState(false);
  const [datesModal, setDatesModal] = useState(false);

  const API_URL = 'https://notes-tracker.onrender.com/notes';

  const getBlogs = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL);
      setBlogs(response.data.data);
      setFilteredBlogs(response.data.data); // Initialize with all Blogs
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const handleSearch = (keywords) => {
    const keywordArray = keywords.split(' ').map(kw => kw.trim().toLowerCase());
    const filtered = Blogs.filter(Blog =>
      keywordArray.some(keyword => 
        Blog.topic.toLowerCase().includes(keyword) || 
        Blog.Blogs.toLowerCase().includes(keyword)
      )
    );
    setFilteredBlogs(filtered);
  };

  const openBlogsModal = (index) => {
    setSelectedIndex(index);
    setBlogsModal(true);
  };

  const closeBlogsModal = () => {
    setSelectedIndex(null);
    setBlogsModal(false);
  };

  const openDatesModal = (index) => {
    setSelectedIndex(index);
    setDatesModal(true);
  };

  const closeDatesModal = () => {
    setSelectedIndex(null);
    setDatesModal(false);
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center mt-[100px]">
          <Searchbar onSearch={handleSearch} />
          <div className='grid mt-10 ml-10 mr-4 grid-cols-2 gap-8 min-w-[400px] sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4'>
            {filteredBlogs.map((Blog, index) => (
              <div key={Blog.id} className='border-cyan-600 hover:shadow-2xl text-[20px] text-pretty text-2xl bg-blue-50 border-4 rounded-md p-6'>
                <div className='text-2xl text-purple-950'><span className='font-bold'>S.No :</span> {index + 1}</div>
                <div className='mt-6'><span className='font-bold '>Topic :</span> {Blog.topic}</div>
                <div className='mt-4'><span className='font-bold '>Status :</span> {Blog.status}</div>
                <div className='mt-4'><span className='font-bold '>Date : </span>{new Date(Blog.createdAt).toDateString()}</div>
                <div className='flex items-center justify-evenly mt-6 mr-2 text-4xl'>
                  <FaNoteSticky className='text-purple-950 cursor-pointer' onClick={() => openBlogsModal(index)} />
                  <Link to={`/Blogs/edit/${Blog._id}`}>
                    <MdEdit className='text-green-800 cursor-pointer' />
                  </Link>
                  <Link to={`/Blogs/delete/${Blog._id}`}>
                    <MdDelete className='text-red-800 cursor-pointer' />
                  </Link>
                  <CiCalendarDate className='text-yellow-500 text-5xl cursor-pointer' onClick={() => openDatesModal(index)} />
                </div>
                {BlogsModal && selectedIndex === index && (
                  <BlogsModal
                    onClose={closeBlogsModal}
                    Blog={Blog}
                  />
                )}
                {datesModal && selectedIndex === index && (
                  <DatesModal
                    onClose={closeDatesModal}
                    Blog={Blog}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsCard;
