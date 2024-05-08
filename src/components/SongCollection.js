import React from "react";
import SongCard from "./SongCard"

function SongCollection({songs, addToPlaylist, removeFromPlaylist,}) {

  return (
    <div className="ui four column grid">
      <div className="row">
      {songs && songs.map(song => (
         <SongCard key={song.id} song={song} addToPlaylist={addToPlaylist} removeFromPlaylist={removeFromPlaylist} />
        ))}
        COLLECTION OF THE GREATEST HITS

      </div>
    </div>
  );
}

export default BotCollection;