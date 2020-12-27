import { useState } from 'react';
import VideoData from '../../Data/VideoData';
import { Collections } from './Components/Collections';
import './Video.scss';

export const Video = () => {

    const [src, setSrc] = useState("https://www.youtube.com/embed/EuSqrA1TG1U")

    const onSrcChange = (newSrc: string) => {
        setSrc(newSrc)
    }

    const videoContent = VideoData.map(item => <Collections 
                            collection={item.collection} 
                            content={item.content}
                            handlers={{onSrcChange}}
                            key={item.id}
                            />)

    return (
        <section className="video">
            <div className="container flex">
                <div className="content flex">
                    {videoContent}
                </div>
                <div className="video-player">
                    <iframe 
                    width="650" 
                    title="video"
                    height="425" 
                    src={src} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    )
}