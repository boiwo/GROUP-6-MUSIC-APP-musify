import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3000/Songs`);
      const data = await response.json();
      setSongs(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
    const results = songs.filter(song =>
      song.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a song..."
        value={query}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map(song => (
          <li key={song.id}>{song.name} - {song.artist}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
