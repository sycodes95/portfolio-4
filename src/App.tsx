import { useRef } from 'react'
import './App.css'
import About from './components/about/about'
import QuestsOverview from './components/about/questsOverview'
import Container from './components/container'
import Footer from './components/footer'
import Header from './components/header'
import Projects from './components/projects/projects'
import "./globals.css"
import useFullOpacity from './hooks/useFullOpacity'
import { QuestRefs } from './types/types'

function App() {

  const { opacity } = useFullOpacity(); 
  
  const questRefs: QuestRefs = {
    "JOBTRACKR": useRef<HTMLDivElement>(null),
    "POLYGLOT PAL": useRef<HTMLDivElement>(null),
    "ZEN ROOFING CORP [ FREELANCE ]": useRef<HTMLDivElement>(null),
    "DAYNESTMETRICS": useRef<HTMLDivElement>(null)
  }
  
  return (
    <main className='flex flex-col items-center w-full h-full min-h-screen main-background'>
      <Header />
      <Container className={`${opacity} relative gap-8 overflow-hidden transition-all duration-1000 `}>
        <div className='flex flex-col items-stretch w-full h-full gap-8 lg:flex-row '>
          <About />
          <QuestsOverview questRefs={questRefs} />
        </div>
        <Projects questsRef={questRefs} />
      </Container>
      <Footer />

    </main>
  )
}

export default App
