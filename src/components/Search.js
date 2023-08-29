import React from "react";

function Search({onHandleSearch}) {

function handleSearch(event) {
  onHandleSearch(event.target.value)
}


  return (
    <div className="ui search" >
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
