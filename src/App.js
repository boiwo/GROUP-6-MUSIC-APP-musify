// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import SongDetailsPage from './components/SongDetailsPage';
import PlaylistPage from './components/Playlist';
import './App.css'

function App() {
  const [playlist, setPlaylist] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          
        </Route>
        <Route path="/song/:id" element={<SongDetailsPage setPlaylist={setPlaylist}/>} />
        <Route path="/playlist" element = {<PlaylistPage  playlist={playlist} setPlaylist={setPlaylist}/>}>
        
        </Route>
      </Routes>
    </Router>
  );
}

export default App;