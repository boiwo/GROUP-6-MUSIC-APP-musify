import React, { useState, useEffect } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(`http://localhost:3000/Songs`);
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSongs();
  }, []);

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
      className='searchbar'
        type="text"
        placeholder="Search for a song..."
        value={query}
        onChange={handleChange}
      />

      
        {searchResults.map(song => (
          <li key={song.id}>
            <strong>{song.name}</strong> - {song.artist}
            <br />
            <img src={song.cover} alt={song.name} style={{ maxWidth: '100px' }} />
          </li>
        ))}
      
    </div>
  );
}

export default SearchBar;
