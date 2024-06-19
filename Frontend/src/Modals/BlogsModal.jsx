import React from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { FaBook } from "react-icons/fa";

const BlogsModal = ({ onClose, Blog }) => {
  return (
    <div className='flex bg-black bg-opacity-60 items-center justify-center top-0 left-0 right-0 bottom-0 fixed'>
      <div
        onClick={(event) => event.stopPropagation()}
        className='bg-white max-w-full h-fit flex flex-col p-4 w-[500px] rounded-md relative'>
        <RxCrossCircled
          onClick={onClose}
          className='text-4xl cursor-pointer text-red-600 absolute right-4' />
        <p className='text-2xl font-bold'>{Blog.topic}</p>
        <p className='text-2xl font-bold mt-6' >Status : <span className='text-purple-900'>{Blog.status}</span></p>
        <p className='flex justify-center'>
          <FaBook className='mr-[11px] -mt-[38px] text-yellow-500 text-[200px]' />
          <span className="text-xl mt-10">{Blog.Blogs}</span>
        </p>
      </div>

    </div>
  )
}

export default BlogsModal