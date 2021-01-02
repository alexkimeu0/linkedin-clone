import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, login, logout } from './features/userSlice'

import { auth } from './firebase'

import { Header, Sidebar, Feed, Login, Widgets } from './components'

import './App.css';

const App = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL 
      }))         
      } else {
        dispatch(logout())        
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />

      {!user ? <Login /> : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
