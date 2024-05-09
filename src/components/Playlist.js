// PlaylistPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../PlaylistPage.css'; // Import the CSS file

function PlaylistPage({ playlist, setPlaylist }) {
  const navigate = useNavigate();

  // Function to remove a song from the playlist
  const removeFromPlaylist = (id) => {
    setPlaylist(prevPlaylist => prevPlaylist.filter(song => song.id !== id));
  };

  // Function to go back to the previous page (SongDetailsPage)
  const goBack = () => {
    navigate(-1); // Go back one step in history
  };

  // Function to navigate back to the home page
  const goToHomePage = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="playlist-container">
      <h1>Playlist</h1>
      <ul>
        {playlist.map(song => (
          <li key={song.id} className="song-item">
            <div className="song-details">
              <img src={song.cover} alt={song.name} className="song-image" /> {/* Display the song image */}
              <div>
                <p>{song.name}</p>
                <p>{song.owner}</p>
              </div>
            </div>
            <button className="remove-button" onClick={() => removeFromPlaylist(song.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="back-buttons">
        <button onClick={goBack}>Back to Song Details</button>
        <button onClick={goToHomePage}>Back to Home Page</button>
      </div>
    </div>
  );
}

export default PlaylistPage;
