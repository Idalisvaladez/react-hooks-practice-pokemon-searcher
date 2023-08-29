import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
const [allPokemon, setAllPokemon] = useState([])

const [renderedPokemon, setRenderedPokemon] = useState([])

useEffect(() => {
  fetch('http://localhost:3001/pokemon')
  .then(res => res.json())
  .then(data => {
    setAllPokemon(data)
    setRenderedPokemon(data)
  })
}, [])

function onHandleSearch(searched) {
  const filteredPokemon = allPokemon.filter((pokemon) => {
    if (pokemon.name.includes(searched)) {
      return pokemon
    }
  })
  setRenderedPokemon(filteredPokemon)
}

function handleAddPokemon(pokemon) {
  setRenderedPokemon([...renderedPokemon, pokemon])
  setAllPokemon([...allPokemon, pokemon])
}


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onRenderNewPokemon={handleAddPokemon}/>
      <br />
      <Search onHandleSearch={onHandleSearch}/>
      <br />
      <PokemonCollection renderedPokemon={renderedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
