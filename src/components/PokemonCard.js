import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  
  const {name, hp, sprites} = pokemon
  const [clicked, setClicked] = useState(false)


  function handleClick() {
    setClicked(!clicked)
  }


  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={clicked ? sprites.back : sprites.front} onClick={handleClick}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
