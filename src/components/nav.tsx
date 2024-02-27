

export default function Nav () {

  const routes = [
    'About',
    'Projects',
    

  ]
  return (
    <div className='flex justify-center w-full h-full gap-4 p-4 pt-12 text-sm text-white font-glow-black grow 5 max-w-7xl'>
      <div className='flex gap-4 p-4 font-semibold rounded-lg'>
      <span className='text-center transition-all duration-500 hover:text-white h-fit'>about</span>
      <span className='text-center transition-all duration-500 hover:text-white h-fit'>projects</span>
      <span className='text-center transition-all duration-500 hover:text-white h-fit'>OS</span>
      <span className='text-center transition-all duration-500 hover:text-white h-fit'>stack</span>

      </div>

    </div>
  )
}