import React from 'react'
import Navbar from './navbar/Navbar'
import Hero from './Hero'
import About from './AboutMe'
import MySkills from './MySkills'
import EducationQualification from './EducationQualification'
import MyProjects from './MyProjects'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='lg:w-6xl  mx-auto pb-10'>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <MySkills></MySkills>
        <EducationQualification></EducationQualification>
        <MyProjects></MyProjects>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default Home
