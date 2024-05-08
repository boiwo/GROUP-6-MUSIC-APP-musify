import React, { useState, useEffect } from 'react';

function Playlist() {
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState('');

  useEffect(() => {
    function fetchPlaylist() {
      fetch('https://json-server-1-vs69.onrender.com/songs')
        .then(function(response) {
          if (!response.ok) {
            throw new Error('Failed to fetch playlist');
          }
          return response.json();
        })
        .then(function(data) {
          setSongs(data);
        })
        .catch(function(error) {
          console.error('Error fetching playlist:', error);
        });
    }
    fetchPlaylist();
  }, [newSong]);

  function addSong() {
    if (newSong.trim() !== '') {
      fetch('https://json-server-1-vs69.onrender.com/playlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ song: newSong }),
      })
        .then(function(response) {
          if (!response.ok) {
            throw new Error('Failed to add song');
          }
          setNewSong('');
           
        })
        .catch(function(error) {
          console.error('Error adding song:', error);
        });
    }
  }

  function removeSong(songId) {
    fetch(`https://json-server-1-vs69.onrender.com/songs${songId}`, {
      method: 'DELETE',
    })
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Failed to remove song');
        }
         
      })
      .catch(function(error) {
        console.error('Error removing song:', error);
      });
  }

  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {songs.map(function(song) {
          return (
            <li key={song.id}>
              {song.title}
              <button onClick={() => removeSong(song.id)}>Remove</button>
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        value={newSong}
        onChange={function(e) {
          setNewSong(e.target.value);
        }}
        placeholder="Add a new song"
      />
      <button onClick={addSong}>Add Song</button>
    </div>
  );
}

export default Playlist;
