import React from "react";
import SongCollection from "./SongCollection";
import Playlist from "./Playlist";

function SongsPage({songPlaylist, songs, addToPlaylist, removeFromPlaylist}) {
  return (
    <div>
      <h1>Hello</h1>
      <Playlist songs = {songPlaylist}/>
      <SongCollection songs = {songs} addToPlaylist = {()=>addToPlaylist} removeFromPlaylist={removeFromPlaylist}/>
    </div>
  )
}

export default SongsPage;