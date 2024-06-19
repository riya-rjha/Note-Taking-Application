import React, { useState, useEffect } from 'react';

const Searchbar = ({ onSearch }) => {
  const [keywords, setKeywords] = useState('');

  const handleInputChange = (e) => {
    setKeywords(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(keywords);
  };

  return (
    <div className='flex items-center justify-center w-full'>
      <input
        type="text"
        value={keywords}
        onChange={handleInputChange}
        placeholder="Enter keywords to search for your desired blog"
        className="border-[2px] border-gray-800 text-red-400 outline-none p-4 m-auto w-[100%] flex-1"
      />
      <button className='border text-xl outline-none p-4 w-36 bg-fuchsia-200 text-red-950' onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default Searchbar;
