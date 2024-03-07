import { useEffect, useState } from 'react'
import './App.css'
import About from './components/about/about'
import Container from './components/container'
import Footer from './components/footer'
import Header from './components/header'
import Projects from './components/projects/projects'
import "./globals.css"
import useFullOpacity from './hooks/useFullOpacity'

type Opacity = 'opacity-0' | 'opacity-100';


function App() {

  const { opacity } = useFullOpacity(); 
  //bg-[#131215]
  return (
    <main className='flex flex-col items-center w-full h-full min-h-screen main-background'>
      <Header />
      <Container className={`${opacity} relative gap-8 overflow-hidden transition-all duration-1000 `}>
        <About />
        <Projects />
      </Container>
      <Footer />

    </main>
  )
}

export default App
