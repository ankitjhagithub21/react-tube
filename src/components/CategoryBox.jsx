

const CategoryBox = () => {
  
const categories = [
  'All',
  'Music',
  'Gaming',
  'News',
  'Movies',
  'Sports',
  'Education',
  'Live',
  'Comedy',
  'Technology',
  'Fashion',
  'Travel',
];

  return (
    <div className="flex w-full overflow-x-scroll gap-3 h-[10%]  items-center px-2">
      {
        categories.map((category,idx)=>{
          return <button key={idx} className={` font-medium ${category === "All" ? 'bg-white text-gray-800':'hover:bg-white bg-gray-100/10 hover:text-gray-800'} text-sm px-3 py-1 rounded-lg  transition duration-300`}>{category}</button>
        })
      }
    </div>
  )
}

export default CategoryBox