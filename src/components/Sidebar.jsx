import {
  FaHome,
  FaCompass,
  FaClock,
  FaPlayCircle,
  FaYoutube,
} from 'react-icons/fa';

const sidebarLinks = [
  { name: 'Home', icon: FaHome, path: '/' },
  { name: 'Explore', icon: FaCompass, path: '/' },
  { name: 'Shorts', icon: FaClock, path: '/' },
  { name: 'Subscriptions', icon: FaPlayCircle, path: '/' },
  { name: 'Library', icon: FaYoutube, path: '/' },
];


const Sidebar = () => {

  return (
    <div className="md:w-[20%] w-0 overflow-hidden">
      {sidebarLinks.map(({ name, icon: Icon}) => (
        <div
          key={name}
         
          className={`flex cursor-pointer items-center gap-4 px-4 py-3 rounded-lg ${name === "Home" ? 'bg-gray-100/10' : ''} hover:bg-gray-100/10 transition `}
        >

          <Icon size={20} />

          <span>{name}</span>


        </div>

      ))}
    </div>
  )
}

export default Sidebar