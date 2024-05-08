import React, { useState, useEffect } from 'react';

function Playlist() {
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState('');

  useEffect(() => {
    function fetchPlaylist() {
      fetch('http://localhost:3000/playlist')
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
  }, []);

  function addSong() {
    if (newSong.trim() !== '') {
      fetch('http://localhost:3000/playlist', {
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
          fetchPlaylist(); // Fetch updated playlist after adding a song
        })
        .catch(function(error) {
          console.error('Error adding song:', error);
        });
    }
  }

  function removeSong(songId) {
    fetch(`http://localhost:3000/playlist/${songId}`, {
      method: 'DELETE',
    })
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Failed to remove song');
        }
        fetchPlaylist(); // Fetch updated playlist after removing a song
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
