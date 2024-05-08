import {useState} from 'react';

function Playlist() {
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState([]);

  function handleAddSong() {
    if (newSong.trim() !== '') {
      setSongs([...songs, newSong]);
      setNewSong('');
    }
  };

  function handleRemoveSong() {
    const newSongs = [...songs];
    newSongs.splice(index, 1);
    setSongs(newSongs);
  };

  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            {song}
            <button onClick={() => handleRemoveSong(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newSong}
        onChange={(e) => setNewSong(e.target.value)}
        placeholder="Add a new song"
      />
      <button onClick={handleAddSong}>Add Song</button>
    </div>
  );
}

export default Playlist;


