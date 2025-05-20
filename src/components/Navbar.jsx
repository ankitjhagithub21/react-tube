import {GoSearch} from "react-icons/go"
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between gap-2 h-[10%] w-full px-2">
      <div className="md:flex hidden items-center gap-2">
        <img src="/vite.svg" alt="logo" />
        <span className="text-xl font-medium">React Tube</span>
      </div>
      <div className="flex items-center rounded-full overflow-hidden w-full max-w-md bg-gray-100/10 border border-gray-200/10">
        <input type="text" placeholder="Search" className="w-full pl-3 bg-black py-2"/>
        <button className="py-2 px-4 border-l border-gray-100/10">
          <GoSearch size={20}/>
        </button>
      </div>
      <div className="flex items-center gap-3">
       
        <button >
          <IoIosNotificationsOutline size={28}/>
        </button>
         <button >
          <FaRegUserCircle size={25}/>
        </button>
      </div>
    </header>
  )
}

export default Navbar