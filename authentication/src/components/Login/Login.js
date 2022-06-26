import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import useLogin from '../../Hooks/useLogin';
import { useLazyQuery, gql } from "@apollo/client";

const GET_LOGIN = gql`
query Login($username: String!, $password: String!) {
  login(email: $username, password: $password) {
    userId
    token
    tokenExpiration
  }
}
`;




export default function Login({ setToken }) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const [load, setLoad] = useState(false);

  const [getlogin,{ error, loading, data }] = useLazyQuery(GET_LOGIN, {
            variables: { username, password },
          });

  async function loginUser({username, password}) {
    return getlogin();
  
   
  //  return fetch('http://localhost:8080/login', {
  //    method: 'POST',
  //    headers: {
  //      'Content-Type': 'application/json'
  //    },
  //    body: JSON.stringify(credentials)
  //  })
  //    .then(data => data.json());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toktrail = await loginUser( username, password );
    await setLoad(true);
    // setToken(token);
  }

  useEffect(()=>{
    if(load)
    {
      const token = {
        token: data.login.token
      }
      setToken(token);
      setLoad(false);
    }
  },[data, load]);

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          : <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <br></br>
          <br></br>
          Password : <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <br></br>
          <button type="submit" style={{marginLeft:"8rem"}}>Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};