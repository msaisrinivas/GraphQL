import React from "react";
import { Link, useParams } from "react-router-dom";
import useCharacter from "../Hooks/useCharacter";
import "./Character.css"

function Character() {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Something Went Wrong...</h1>;
  return (
    <div><Link to={"/"}> Back to Main</Link>
    <div className="character">
      
      <div className="characterLeft">
      <img src={data.character.image} />
        <h1>{data.character.name}</h1>
        <h2>{data.character.gender}</h2>
      </div>
      <div className="chracterEpisode">
        {data.character.episode.map(
          (
            epi: {
              episode:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              name:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            },
            key: React.Key | null | undefined
          ) => {
            return (
              <div key={key}>
                <b>{epi.episode}</b> - {epi.name}
              </div>
            );
          }
        )}
      </div>
    </div>
    </div>
  );
}

export default Character;
