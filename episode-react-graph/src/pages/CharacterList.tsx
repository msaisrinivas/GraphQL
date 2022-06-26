import React from 'react';
import "./CharacterList.css";
import useCharacterList from '../Hooks/useCharacterList';
import { Link } from 'react-router-dom';



function CharacterList() {
  const {error, loading, data} = useCharacterList();

  if(loading) return <h1>Loading...</h1>

  if(error) return <h1>Something Went Wrong...</h1>

  return (
    <div className='characterList'>
      <Link to={'/search'} style={{width:"100%", padding:"3rem 3rem"}}> Go to Search Bar </Link>
      {data.characters.results.map((character: { image: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; id: any; }, key: React.Key | null | undefined) => {
        return <Link to={`/${character.id}`} key={key}>
          <img src={character.image}/>
          <h2>{ character.name}</h2>
        </Link>
      })}
    </div>
  )
}

export default CharacterList;
