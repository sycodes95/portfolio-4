import './App.css'
import About from './components/about/about'
import Container from './components/container'
import Footer from './components/footer'
import Header from './components/header'
// import SocialMedia from './components/socialMedia'
// import StackedSteps from "./assets/svgDecor/stacked-steps-haikei.svg"
import Projects from './components/projects/projects'
import SectionHeader from './components/sectionHeader'
import "./globals.css"

function App() {
  //bg-[#131215]
  return (
    <main className='flex flex-col items-center w-full h-full min-h-screen main-background'>
      <Header />

      <Container className='relative gap-8 overflow-hidden'>
        {/* <SocialMedia /> */}
        <SectionHeader title="PROFILE" />
        <About />
        <SectionHeader title="ALL QUESTS" />
        <Projects />

      </Container>
      <Footer />


      {/* <Nav />
       */}

    </main>
  )
}

export default App
