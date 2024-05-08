import React from "react";
import { Link } from "react-router-dom"; 



function SongCard({ song, addToPlaylist, removeFromPlaylist }) {
  const handleClick = () => {
    addToPlaylist(song);
  };

  const handleRemove = () => {
    removeFromPlaylist(song.id);
  
    fetch(`/${song.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete bot from backend");
        }
      })
      .catch((error) => {
        console.error("Error deleting bot from backend:", error);
        // Revert the change in the frontend if deletion from backend fails
        addToArmy(bot);
      });}

  return (
    <div className="ui column">
     
        <div className="ui card" key={song.id} onClick={handleClick}>
        <Link to={`/PROJECTREPO/bot/${song.id}`}>
          <div className="image">
            <img alt="oh no!" src={song.avatar_url} />
          </div>
          </Link>
          <div className="content">
            <div className="header">
              {song.name}
            </div>
            <div className="meta text-wrap">
              <small>{song.catchphrase}</small>
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat" />
              {song.health}
            </span>
            <span>
              <i className="icon lightning" />
              {song.damage}
            </span>
            <span>
              <i className="icon shield" />
              {song.armor}
            </span>
            <span>
              <div className="ui center aligned segment basic">
                <button className="ui mini red button" onClick={handleRemove}>
                  x
                </button>
              </div>
            </span>
          </div>
        </div>
    
    </div>
  );
}

export default SongCard;