import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoChevronBackCircle } from "react-icons/io5";

const AddNotes = () => {

  const [topic, setTopic] = useState('');
  const [status, setStatus] = useState('');
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // const URL = 'http://localhost:5555/notes';
  // const addNotes = async () => {
  //   setIsLoading(true);
  //   try {
  //     const data = { topic, status, notes };
  //     const response = await axios.post(URL, data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error.message);
  //     setIsLoading(false);
  //   }
  // }

  // addNotes();

  return (

    <div>
      <div>
        <Link to='/'>
          <IoChevronBackCircle className='-mt-6 text-5xl float-left cursor-pointer hover:shadow-outline' />
        </Link>
      </div>
      <div className="text-center flex items-center justify-center flex-col mt-20 p-9">
        <div className='mt-6'>
          <label className='text-3xl font-bold' htmlFor="Topic">Topic</label>
          <div>
            <input type="text" id='Topic' className='border-black w-[416px] mt-6 border-2 outline-none p-2 overflow-hidden' />
          </div>
        </div>
        <div className='mt-6'>
          <label className='text-3xl font-bold' htmlFor="Status">Status</label>
          <div>
            <input type="text" id='Status' className='border-black w-[416px] mt-6 border-2 outline-none p-2 overflow-hidden' />
          </div>
        </div>
        <div className='mt-6'>
          <label className='text-3xl font-bold' htmlFor="Notes">Notes</label>
          <div>
            <input type="text" id='Notes' className='border-black w-[416px] mt-6 border-2 outline-none p-2 overflow-hidden' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddNotes