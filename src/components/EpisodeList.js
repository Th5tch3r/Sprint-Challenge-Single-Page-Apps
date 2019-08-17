import React, { useEffect, useState } from "react";
import Axios from "axios";

import EpisodeCard from "../components/EpisodeCard";

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episode, setEpidode] = useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get(`https://rickandmortyapi.com/api/episode/`)
      .then(response => {
        setCharacter(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>{episode.map(e => <EpisodeCard data={e} />)}</h2>
    </section>
  );
}
