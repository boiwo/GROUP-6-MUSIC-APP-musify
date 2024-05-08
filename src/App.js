import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SongsPage from "./SongsPage";
import Playlist from "./Playlist";
;

function App() {
  const  [songs, setSongs] = useState([]);
  const [songPlaylist, setSongPlaylist] = useState([]);

  const addToPlaylist = (song) => {
    if (!songPlaylist.some((PlaylistSong) => PlaylistSong.id ===song.id)) {
      setsongPlaylist([...songPlaylist, song]);
    }
  };

  const removeFromPlaylist = (songId) => {
    const updatedSongPlaylist = songPlaylist.filter((song) => song.id !== songId);
    setSongPlaylist(updatedSongPlaylist);
  };

  useEffect(() => {
    fetch("/songs")
    .then(response => response.json())
    .then(data => setSongs(data));
  },[songPlaylist]);

  return (
   
      <Routes>
        <Route path="/" element={<BotsPage songs = {songs} songPlaylist={songPlaylist} addToPlaylist = {addToArmy} removeFromPlaylist={removeFromPlaylist}/>} />
        <Route path="//song/:id" element={<Playlist addToPlaylist = {addToPlaylist} />} />
      </Routes>
  
  );
}

export default App;