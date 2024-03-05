import './App.css'
import About from './components/about/about'
import Container from './components/container'
import Footer from './components/footer'
import Header from './components/header'
import Projects from './components/projects/projects'
import "./globals.css"

function App() {
  //bg-[#131215]
  return (
    <main className='flex flex-col items-center w-full h-full min-h-screen main-background'>
      <Header />

      <Container className='relative gap-8 overflow-hidden'>
        {/* <SocialMedia /> */}
        <About />
        <Projects />

      </Container>
      <Footer />


      {/* <Nav />
       */}

    </main>
  )
}

export default App
