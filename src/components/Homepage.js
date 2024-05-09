
// HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Homepage.css'; // Import CSS file for HomePage styles

function HomePage({ setPlaylist }) {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://json-server-1-vs69.onrender.com/songs')
      .then(response => response.json())
      .then(data => {
        setSongs(data);
        setFilteredSongs(data); // Initialize filtered songs with all songs
      });
  }, []);

  useEffect(() => {
    const filtered = songs.filter(song =>
      song.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSongs(filtered);
  }, [songs, searchTerm]);

  

  return (
    <div className="homepage-container">
      <h1 className='header'>WELCOME TO MUSIFY</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search songs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <h2 className='H2'>SOME OF YOUR GREATEST HITS!</h2>
      <ul>
        {filteredSongs.map(song => (
          <li  key={song.id}>
            <img src={song.cover} alt={song.name} />
            <Link className='linkname' to={`/song/${song.id}`}>{song.name}</Link>
            
            <Link to={`/song/${song.id}`}>
              <button>DETAILS</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;