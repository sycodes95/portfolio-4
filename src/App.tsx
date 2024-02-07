import { useEffect, useState } from 'react'
import './App.css'
import Header from './assets/components/header'
import blackCirclesBG from './assets/backgrounds/blackcircles.jpg'

type Opacity = 'opacity-0' | 'opacity-100' 

function App() {
  const [opacity, setOpacity] = useState<Opacity>('opacity-0')
  const kevin = ['K', 'E', 'V', 'I', 'N']
  const kim = ['K', 'I', 'M']

  useEffect(() => {
    setOpacity('opacity-100')
  },[])
  return (
    <main className='w-full h-full min-h-screen '>
      <img className='h-[50%] w-full object-contain absolute top-1/2 -translate-y-1/2 left-0 -z-10 opacity-20' src={blackCirclesBG} alt="" />
      <Header />
      <div className={`${opacity} text-white p-8 w-full flex justify-center transition-all duration-1000`}>
        <div className='flex flex-col font-glow items-center gap-4'>
          <div className='grid gap-2 items-center grid-cols-5'>
            {
            kevin.map((letter, index) => (
              <span className='text-3xl transition-all duration-300 md:text-5xl font-display text-center text-white w-full mt-2' key={index}>{letter}</span>
            ))

            }
          </div>

          <div className='grid gap-2 items-center grid-cols-3'>
            {
            kim.map((letter, index) => (
              <span className='text-3xl transition-all duration-300 md:text-5xl font-display text-center text-white mt-2' key={index}>{letter}</span>
            ))

            }
          </div>
          

        </div>
      </div>

      <div className='font-glow '>
          wasuuoppp
      </div>
    </main>
  )
}

export default App
