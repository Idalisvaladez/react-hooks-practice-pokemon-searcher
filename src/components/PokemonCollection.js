import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({renderedPokemon}) {

  const mappedPokemon = renderedPokemon.map((pokemon) => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon} />
  })

  return (
    <Card.Group itemsPerRow={6}>
      {mappedPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
