<<<<<<< HEAD
import { Navbar } from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-scree text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
=======
import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

const App = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground />
>>>>>>> 9ce856d1847c15f9d42e5c668a7298c3fe901315
    </div>
  )
}

export default App