import { useEffect, useState } from "react";
import axios from "axios";
import VideoCardSkeleton from "./VideoCardSkeleton";
import { Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const VideoCard = ({ video }) => {
  const { snippet, id } = video;
  const [channelDetails, setChannelDetails] = useState(null);
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    const fetchChannelDetails = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${snippet.channelId}&key=${API_KEY}`
        );
        setChannelDetails(res.data.items[0]);
      } catch (error) {
        console.error("Failed to fetch channel details", error);
        setChannelDetails(null);
      }finally{
        setIsLoading(false)
      }
    };

    if (snippet?.channelId) {
      fetchChannelDetails();
    }
  }, [snippet?.channelId]);

  if(isLoading){
    return <VideoCardSkeleton/>
  }

  return (
    <Link className="w-full cursor-pointer" to={`/watch?v=${id}`}>
      <img
        src={snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
        className="h-48 w-full object-cover rounded-lg mb-3"
        loading="lazy"
      />
      <div className="flex gap-3  items-start">
        <img
          src={
            channelDetails?.snippet?.thumbnails?.default?.url }
          alt="channel"
          className="h-10 w-10 object-cover rounded-full"
        />
        <div>
          <p className="text-sm font-medium line-clamp-2">{snippet?.title}</p>
          <p className="text-sm text-gray-400">{snippet?.channelTitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
