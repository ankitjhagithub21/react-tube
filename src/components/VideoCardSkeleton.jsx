const VideoCardSkeleton = () => {
    return (
        <div className="w-full animate-pulse">
            {/* Video Thumbnail Skeleton */}
            <div className="bg-gray-100/10 h-48 w-full rounded-lg mb-3" />

            {/* Channel Info Skeleton */}
            <div className="flex gap-3 items-start">
                {/* Channel Image */}
                <div className="bg-gray-100/10 h-10 w-10 rounded-full" />

                {/* Text lines */}
                <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-100/10 rounded w-3/4" />
                    <div className="h-3 bg-gray-100/10 rounded w-1/2" />
                </div>
            </div>
        </div>
    );
};

export default VideoCardSkeleton;
