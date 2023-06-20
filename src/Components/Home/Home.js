import React from 'react'
import HomeProfile from '../Profile/HomeProfile'
import Services from '../Services/Services';
import Guidelines from './Guidelines';
import Blogs from '../Blogs/Blogs';
import MainHeader from '../MainHeader/MainHeader';
const Home = (props) => {
  return (
    <>
      <MainHeader LuNamesr='Health & Glow, 18th Main Road, HSR, Sector  II ' dataName={false}  />
      <HomeProfile />
      <Services />
      <Guidelines />
      <Blogs />
    </>
  )
}

export default Home
