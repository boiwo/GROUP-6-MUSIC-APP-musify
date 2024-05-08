import React, { useEffect, useState } from "react";

function Search(){
    const [songs , setsongs] = useState([])

function handleSearch(event){
    const hint = event.target.value
    if (hint.length > 0) {
        const filter = songs.filter((song) => {
            return song.name.toLowerCase().includes(hint.toLowerCase())
        })
        if (filter.length > 0) {
        setsongs([...filter])
        }
      
    }else {
        setsongs([...songs])
    }}

useEffect(() => {
fetch ("http://localhost:3000/Songs")
      .then((resp) => resp.json())
      .then (data => setsongs(data))

})


return(
<div>
    <form>
<input type="text" placeholder="Search your song here"  onChange={handleSearch}                        />

    </form>


</div>
)

}
export default Search