import './App.css';
import { useState } from 'react';

import WelcomePage from './components/WelcomePage/WelcomePage';
import GetUserComponent from './components/GetUserComponent/GetUserComponent';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [user, setUser] = useState("")


  return (
    <>
    {
    isLoggedIn ? 
    <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn}/>
    :
    <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
    }
    </>
  );
}

export default App;
