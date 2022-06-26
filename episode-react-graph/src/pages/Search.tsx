import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import "./Search.css"
import { Link } from "react-router-dom";

const GET_SEARCH = gql`
  query getSearch($name: String) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

function Search() {
  const [name, setName] = useState("");

  const [getLocations, { error, loading, data, called }] = useLazyQuery(
    GET_SEARCH,
    { variables: { name } }
  );

  console.log({
    called,
    loading,
    error,
    data,
  });

  return (
    <div>
        <Link to={"/"}> Back to Main</Link><br></br>
      <input value={name} onChange={(e) => setName(e.target.value)} className="inputClass"></input>
      <button onClick={() => getLocations()} className="buttonClass">Search</button>
      {loading && <div><h1> Loading... </h1></div>}
      {error && <div><h1> Something Went Wrong... </h1></div>}
      {data && (
          <ul>
              {data.characters.results.map((character: { location: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; },key: React.Key | null | undefined) => {
                  return <div className="locationName" key={key}>{character.location.name}</div>
              })}
          </ul>
      )}
    </div>
  );
}

export default Search;
