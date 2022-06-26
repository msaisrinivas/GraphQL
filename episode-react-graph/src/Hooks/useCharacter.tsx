import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
query characterById($id: ID!){
  character(id: $id){
    id
    name
    gender
    image
    episode{
      episode
      name
    }
  }
}
`;

const useCharacter = (id:any) => {

  const { error, loading, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  return {
    error,
    loading,
    data,
  };
}

export default useCharacter;
