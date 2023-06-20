import React, { useEffect, useState } from 'react'

import Splash from './Components/Splash/Splash'
import WRoutes from './WRoutes'
const App = () => {
  const [inLoading, setInLoading] = useState(false);
  useEffect(()=>{
    setInLoading(true);
    setTimeout(()=>{
      setInLoading(false);
    }, 1000)
  }, []);
  return (
    <>
    {
      inLoading  ?  <Splash /> :<WRoutes/>
    }
    </>
  )
}

export default App
