import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to search results page with the search query
    navigate(`/search-results?query=${searchQuery}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full md:w-2/3 lg:w-1/2 border bg-white rounded-full px-4 py-2 mx-4 md:mx-0">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="focus:outline-none w-full bg-white"
      />
      <button type="submit" className="text-blue-500">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
