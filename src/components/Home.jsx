import React from 'react'
import Navbar from './navbar/Navbar'
import Hero from './Hero'
import About from './AboutMe'

const Home = () => {
  return (
    <div className='lg:w-6xl  mx-auto'>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
    </div>
  )
}

export default Home