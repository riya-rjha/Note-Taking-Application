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
    <div className='flex flex-col sm:flex-row items-center justify-center w-full max-w-4xl p-4 mx-auto bg-purple-50 rounded-lg shadow-lg'>
      <input
        type="text"
        value={keywords}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter keywords to search for your desired Note"
        className="border-2 border-purple-400 text-gray-800 outline-none p-3 rounded-lg w-full sm:w-auto flex-1 sm:mr-2"
      />
      <button
        className='bg-purple-600 text-white text-lg p-3 rounded-lg w-full sm:w-40 mt-2 sm:mt-0 hover:bg-purple-700 transition-colors duration-300 ease-in-out'
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
