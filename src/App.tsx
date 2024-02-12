import { useEffect, useState } from 'react'
import './App.css'
import Header from './assets/components/header'
import SocialMedia from './assets/components/socialMedia';
import Hero from './assets/components/hero';
import Frame from './assets/components/frame';
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
    

    </main>
  )
}

export default App
