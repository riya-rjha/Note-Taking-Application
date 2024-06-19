import React, { useState } from 'react';

const Searchbar = ({ onSearch }) => {
  const [keywords, setKeywords] = useState('');

  const handleInputChange = (e) => {
    setKeywords(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(keywords);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <div className='flex items-center justify-center w-full max-w-[1190px] mt-10'>
      <input
        type="text"
        value={keywords}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter keywords to search for your desired blog"
        className="border-[2px] border-gray-800 text-red-400 outline-none p-4 m-auto w-[100%] flex-1"
      />
      <button
        className='border text-xl outline-none p-4 w-40 bg-red-200 text-red-950 hover:bg-red-300 transition-all delay-75 hover:text-emerald-950'
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
