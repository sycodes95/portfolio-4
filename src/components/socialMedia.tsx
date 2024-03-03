import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function SocialMedia () {

  const socialMediaData = [
    {
      icon: <GitHubIcon fontSize='inherit'/>,
      href: 'https://github.com'
    },
    {
      icon: <LinkedInIcon fontSize='inherit' />,
      href: 'https://github.com'
    },
    
    {
      icon: <GitHubIcon fontSize='inherit'/>,
      href: 'https://github.com'
    },
    {
      icon: <YouTubeIcon fontSize='inherit'/>,
      href: 'https://github.com'
    },

  ]
  return (
      <div className='z-50 flex flex-col items-center justify-center border-t border-b w-fit h-fit border-black/30'>
        <div className='flex justify-end w-full md:pr-2'>
          <span className="text-2xl font-display">UWD</span>
        </div>
        <div className='flex items-center justify-center h-10 gap-2 text-black rounded-sm w-fit border-black/30'>
          <a className='relative flex items-center h-full p-2 overflow-hidden text-xs text-white transition-all duration-300 border box-glow-white-nav hover:border-white/15 border-white/5 group hover:bg-opacity-50 w-fit ' href="">RESUME</a>
          {
          socialMediaData.map((data) => (
            <a className='relative flex items-center p-2 overflow-hidden text-white transition-all duration-300 border box-glow-white-nav hover:border-white/15 border-white/5 group hover:bg-opacity-50 w-fit' href={data.href} target='_blank'>
              {data.icon}
              <div className='absolute -top-[35%] -right-[35%]  w-14 h-14 rotate-45 border-t-[4px]  border-white/50 group-hover:top-[100%]   group-hover:right-[100%] border-opacity-100 duration-300 transition-all'></div>
            </a>

          ))
          }
        </div>

      </div>
  )
}