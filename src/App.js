import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Playlist from "./components/Playlist";
import SongsPage from "./components/SongsPage";
;

function App() {
  const  [songs, setSongs] = useState([]);
  const [songPlaylist, setSongPlaylist] = useState([]);

  const addToPlaylist = (song) => {
    if (!songPlaylist.some((PlaylistSong) => PlaylistSong.id ===song.id)) {
      setSongPlaylist([...songPlaylist, song]);
    }
  };

  const removeFromPlaylist = (songId) => {
    const updatedSongPlaylist = songPlaylist.filter((song) => song.id !== songId);
    setSongPlaylist(updatedSongPlaylist);
  };

  useEffect(() => {
    fetch("https://json-server-1-vs69.onrender.com/songs")
    .then(response => response.json())
    .then(data => setSongs(data));
  },[songPlaylist]);

  return (
   
      <Routes>
        <Route path="/" element={<SongsPage songs = {songs} songPlaylist={songPlaylist} addToPlaylist = {addToPlaylist} removeFromPlaylist={removeFromPlaylist}/>} />
        <Route path="//song/:id" element={<Playlist addToPlaylist = {addToPlaylist} />} />
      </Routes>
  
  );
}

export default App;