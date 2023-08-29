import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onRenderNewPokemon}) {
const [formData, setFormData] = useState({
  name: "",
  hp: "",
  frontUrl: "",
  backUrl: ""
})
const initObj =  {
  name: "",
  hp: "",
  frontUrl: "",
  backUrl: ""
}


function handleFormData(event) {
  const name = event.target.name
  const value = event.target.value
  setFormData({
    ...formData,
    [name] : value
  })
  console.log(formData)
}

function handleSubmit(event) {
  event.preventDefault()
  const newPokemon = {
    name: formData.name,
    hp: formData.hp,
    sprites: {
      front: formData.frontUrl,
      back: formData.backUrl
    }
  }
  fetch('http://localhost:3001/pokemon', {
    method: 'POST',
    headers: {'Content-Type' : 'application/json',
  }, body: JSON.stringify(newPokemon)
  })
  .then(res => res.json())
    .then(pokemon => onRenderNewPokemon(pokemon))
    setFormData(initObj)
}



  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={formData.name} 
            onChange={handleFormData}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={formData.hp} 
            onChange={handleFormData}
            />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.front}
            onChange={handleFormData}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.back}
            onChange={handleFormData}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
