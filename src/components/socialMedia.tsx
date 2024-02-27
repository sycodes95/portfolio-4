import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function SocialMedia () {

  const socialMediaData = [
    {
      icon: <GitHubIcon />,
      href: 'https://github.com'
    },
    {
      icon: <LinkedInIcon />,
      href: 'https://github.com'
    },
    {
      icon: <YouTubeIcon />,
      href: 'https://github.com'
    },
    {
      icon: <GitHubIcon />,
      href: 'https://github.com'
    }

  ]
  return (
      <div className='absolute top-36 left-8 flex items-center justify-center w-fit h-fit border-t border-b border-black/30 z-50'>
        <div className='grid items-center justify-center h-full grid-rows-4 gap-2 text-black rounded-sm w-fit border-black/30'>

          {
          socialMediaData.map((data) => (
            <a className='relative flex items-center box-glow-white-nav p-2 overflow-hidden text-white transition-all hover:border-white/15 duration-300 border rounded-md border-white/5 group  hover:bg-opacity-50 w-fit' href={data.href} target='_blank'>
              {data.icon}
              <div className='absolute -top-[25%] -right-[25%]  w-14 h-14 rotate-45 border-t-[4px]  border-white group-hover:top-[100%]   group-hover:right-[100%] border-opacity-100 duration-300 transition-all'></div>
            </a>

          ))
          }
        </div>

      </div>
  )
}