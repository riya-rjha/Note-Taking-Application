import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Searchbar = ({ onSearch }) => {
  const [keywords, setKeywords] = useState('');

  const handleInputChange = (e) => {
    setKeywords(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(keywords);
  };

  return (
    <div>
      <input
        type="text"
        value={keywords}
        onChange={handleInputChange}
        placeholder="Enter keywords to search for your desired blog"
        className="border border-[2px] border-gray-800 text-red-400 outline-none p-4 m-auto w-[100%]"
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default Searchbar;
