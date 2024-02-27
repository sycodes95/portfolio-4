import './App.css'
<<<<<<< HEAD
import Header from './assets/components/header'
import SocialMedia from './assets/components/socialMedia';
import Hero from './assets/components/hero';
import Frame from './assets/components/frame';
import Contents from './assets/components/contents';
=======
import About from './components/about/about'
import Container from './components/container'
import Header from './components/header'
import SocialMedia from './components/socialMedia'

>>>>>>> 937ca779f6595086aa0147e6701b8c1c2e8adc92

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
