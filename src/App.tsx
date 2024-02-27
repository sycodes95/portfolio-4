import './App.css'
import About from './components/about/about'
import Container from './components/container'
import Header from './components/header'
import SocialMedia from './components/socialMedia'


function App() {
  //bg-[#131215]
  return (
    <main className='flex flex-col items-center w-full h-full min-h-screen  '>
      <Container className='relative'>
        <Header />
        <SocialMedia />
        <About />
      </Container>
     
      {/* <Nav />
       */}

    </main>
  )
}

export default App
