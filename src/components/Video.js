import React from 'react'
import VideoCard from "./VideoCard.js"
import "../styles/Video.css"

const Video = ({videos}) => {
  return (
    <div className="videos">
    {
        videos.map((item,index)=>(
            <VideoCard index={index} key={item.image} image={item.image} name={item.name}/>
        ))
    }    
    </div>
  )
}

export default Video
