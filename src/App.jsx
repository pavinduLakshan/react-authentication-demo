import { useState, useEffect } from 'react';
import { useAuthContext } from '@asgardeo/auth-react';
import './App.css'

function App() {
  const { state, getBasicUserInfo, signIn, signOut } = useAuthContext();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (state.isAuthenticated) {
      getBasicUserInfo().then((response) => {
        setUserInfo(response)
      }).catch((error) => {
        console.error(error);
      });
    }
  }, [state.isAuthenticated]);


  return (
    <>
      {
        state.isAuthenticated
          ? (
            <>
              <h1>Welcome, {userInfo?.username}</h1>
              <button onClick={signOut}>Logout</button>
            </>
          )
          : <button onClick={signIn}>Login</button>
      }

    </>
  )
}

export default App
