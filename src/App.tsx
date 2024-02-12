import { useEffect, useState } from 'react'
import './App.css'
import Header from './assets/components/header'
import SocialMedia from './assets/components/socialMedia';
import Nav from './assets/components/nav';
import Hero from './assets/components/hero';
import Frame from './assets/components/frame';
import Stack from './assets/components/sections/stack';
import About from './assets/components/sections/about';
import Contents from './assets/components/contents';

function App() {
  //bg-[#131215]
  return (
    <main className='flex flex-col items-center w-full h-full min-h-screen '>
      <Frame />
      <Header />
      <Hero />
      <SocialMedia />
      {/* <Nav />
       */}

      <Contents />
      <About />
      <Stack />
    

    </main>
  )
}

export default App
