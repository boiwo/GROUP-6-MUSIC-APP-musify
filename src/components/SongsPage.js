
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../SongDetails.css'; // Import the CSS file

function SongDetailsPage({ setPlaylist }) {
  const { id } = useParams();
  const [song, setSong] = useState(null);

  useEffect(() => {
    fetch(`https://json-server-1-vs69.onrender.com/songs/${id}`)
      .then(response => response.json())
      .then(data => setSong(data));
  }, [id]);

  const addToPlaylist = (song) => {
    setPlaylist(prevPlaylist => [...prevPlaylist, song]);
  };

  if (!song) {
    return <div>Loading...</div>;
  }

  return (
    <div className="song-details-container"> {/* Apply CSS class */}
      <h1>Song Details</h1>
      <h2>{song.name}</h2>
      <p>Artist: {song.owner}</p>
      <p>Lyric: {song.lyrics}</p>
      <p>Producer: {song.producer}</p>
      <img src={song.cover} alt={song.name} />
      <button onClick={() => addToPlaylist(song)}>Add to Playlist</button>
      <Link to="/playlist">
        <button>Go to Playlist</button>
      </Link>
      <Link to="/">
        <button className="back-to-home-button">Go back to Homepage</button> {/* Apply CSS class */}
      </Link>
    </div>
  );
}

export default SongDetailsPage;
