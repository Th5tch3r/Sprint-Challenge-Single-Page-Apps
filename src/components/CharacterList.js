import React, { useEffect, useState } from "react";
import Axios from "axios";

import CharacterCard from "../components/CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacter(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>{character.map(props => {
      return <CharacterCard 
        name={props.name}
        image={props.image}
        created={props.created}
        location={props.location}
        origin={props.origin}
        key={props.id} />})}</h2>
    </section>
  );
}
