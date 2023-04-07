import React from "react";
import VideoItem from "./VideoItem";

const VideosList = ({ videos, onSelectVideo }) => {
    return(
        <div className="ui relaxed divided list">
            {videos.map(video => 
                <VideoItem 
                    key={video.id.videoId} 
                    video={video} 
                    onSelectVideo={onSelectVideo}
                />)}
        </div>
    )
}

export default VideosList