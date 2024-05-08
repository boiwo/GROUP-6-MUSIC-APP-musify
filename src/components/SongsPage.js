import React from "react";
import SongCollection from "./SongCollection";
import Playlist from "./Playlist";

function SongsPage({songPlaylist, songs, addToPlaylist, removeFromPlaylist}) {
  return (
    <div>
      <Playlist songs = {songPlaylist}/>
      <SongCollection songs = {songs} addToPlaylist = {()=>addToPlaylist} removeFromPlaylist={removeFromPlaylist}/>
    </div>
  )
}

export default SongsPage;