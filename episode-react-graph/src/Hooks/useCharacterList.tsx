import React from 'react'
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERSLIST = gql`
query{
  characters{
    results{
      id
      name
      image
    }
  }
}
`;


function useCharacterList() {
    const {error, loading, data} = useQuery(GET_CHARACTERSLIST);
  return (
      {
          error,
          loading,
          data
      }
  )
}

export default useCharacterList;
