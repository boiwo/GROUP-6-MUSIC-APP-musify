import React, {useState, useEffect} from "react";
import SongCollection from "./SongCollection";

function SongsPage({songPlaylist, songs, addToPlaylist, removeFromPlaylist}) {
  return (
    <div>
      <YourSongPlaylist songs = {songPlaylist}/>
      <SongCollection songs = {songs} addToPlaylist = {()=>addToPlaylist} removeFromPlaylist={removeFromPlaylist}/>
    </div>
  )
}

export default SongsPage;