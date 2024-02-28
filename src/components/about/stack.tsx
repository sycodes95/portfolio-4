import { SignalCellularNull } from "@mui/icons-material"

interface StackData {
  section: React.ReactNode; 
  tech: {
    name: string;
    icon: React.ReactNode | null;
  }[],
}

export default function Stack () {

  const stackData: StackData[] = [
    {
      section: <span className="w-full text-sm text-center text-blue-400 border border-blue-400 rounded-lg">FRONTEND</span>,
      tech : [
        { name: "React" , icon: null },
        { name: "Type" , icon: null },
        { name: "React" , icon: null },

        
        { name: "React" , icon: null }
      ]
    },
    {
      section: <span className="w-full text-sm text-center text-green-400 border border-green-400 rounded-lg">BACKEND</span>,
      tech : [
        { name: "Node" , icon: null }
      ]
    },
    {
      section: <span className="w-full text-sm text-center text-orange-400 border border-orange-400 rounded-lg">OTHER</span>,
      tech : [
        { name: "Git" , icon: null }
      ]
    },
  ];

  return (
    <div className="flex flex-col w-full h-full gap-4 text-white">
      <span className="w-full p-2 text-sm font-semibold text-center border-b border-white/5">THE STACK</span>

      <div className="grid w-full grid-cols-3 gap-4">

        {
          stackData.map((stack) => (
            <div className="flex flex-col items-center h-full gap-2 border-r border-white/5">
              {stack.section}

              <div className="flex flex-col gap-2">
                {
                stack.tech.map((tech) => (
                  <div className="flex items-center gap-2">
                    {tech.icon}
                    <span className="text-xs">{tech.name}</span>
                  </div>
                ))
                }
                
              </div>
            </div>
          ))
        }

        {/* <div className="flex flex-col items-center h-full gap-2 border-r border-white/5">
          <span className="w-full p-2 text-sm text-center text-blue-400 border border-blue-400 rounded-lg">FRONTEND</span>
          <div className="flex flex-col gap-2">

          </div>
        </div>

        <div className="flex flex-col h-full gap-2 border-r border-white/5">
          <span className="w-full p-2 text-sm text-center text-green-400 border border-green-400 rounded-lg">BACKEND</span>
          <div className="flex flex-col gap-2">

          </div>
        </div>

        <div className="flex flex-col h-full gap-2 border-white/5">
          <span className="w-full p-2 text-sm text-center text-orange-400 border border-orange-400 rounded-lg">OTHER</span>
          <div className="flex flex-col gap-2">

          </div>
        </div> */}

      </div>
    </div>
  )
}