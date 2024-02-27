import './App.css'
import About from './components/about/about'
import Container from './components/container'
import Header from './components/header'
import SocialMedia from './components/socialMedia'
import StackedSteps from "./assets/svgDecor/stacked-steps-haikei.svg"
import Projects from './components/projects/projects'


function App() {
  //bg-[#131215]
  return (
    <main className='flex flex-col items-center w-full h-full min-h-screen  '>
      <Header />

      <Container className='relative overflow-hidden'>
        {/* <SocialMedia /> */}
        <About />
        <Projects />
      </Container>
      {/* <Nav />
       */}

    </main>
  )
}

export default App
