import Sidebar from "./Sidebar"
import VideoContainer from "./VideoContainer"


const Main = () => {
  return (
    <div className="h-[90%] w-full flex overflow-hidden">
        <Sidebar/>
        <VideoContainer/>
    </div>
  )
}

export default Main