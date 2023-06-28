import React from 'react';
import MainHeader from './Components/MainHeader/MainHeader';
import classes from './Components/Assets/Css/bl.module.css'
import RightNav from './Components/MainHeader/RightNav';
import Home from './Components/Pages/Home';

function App() {
  return (
    <>
        <MainHeader />
      <main className = { classes['mainSection'] } >
        <RightNav />
        <Home />
      </main> 
    </>
  );
}

export default App;
