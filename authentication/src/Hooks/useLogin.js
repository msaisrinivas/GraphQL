// import { useLazyQuery, gql } from "@apollo/client";

// const GET_LOGIN = gql`
// query Login($email: String!, $password: String!) {
//   login(email: $email, password: $password) {
//     userId
//     token
//     tokenExpiration
//   }
// }
// `;
 
// function useLogin(email, password){
//     const { error, loading, data } = useLazyQuery(GET_LOGIN, {
//         variables: { email, password },
//       });
//       return {
//         error,
//         loading,
//         data,
//       };
// }

// export default useLogin;
