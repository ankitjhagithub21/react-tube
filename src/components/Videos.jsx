import { useEffect, useState } from "react"
import VideoCard from "./VideoCard"
import VideoCardSkeleton from "./VideoCardSkeleton"



const Videos = () => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {

    const fetchVideos = async () => {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&contentDetails&statistics&chart=mostPopular&maxResults=9&regionCode=IN&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
      try {
        const res = await fetch(url)
        if (res.ok) {
          const data = await res.json()
          console.log(data.items)
          setVideos(data.items)
        }

      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }

    }
    fetchVideos()
  }, [])
  return (
    <div className="w-full h-[90%] p-2 overflow-y-scroll  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {
        loading ? [1, 2, 3, 4, 5, 6].map((item, idx) => {
          return <VideoCardSkeleton key={idx} />
        }) : videos.map((video) => {
          return <VideoCard key={video.id} video={video} />
        })
      }
    </div>
  )
}

export default Videos