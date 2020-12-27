import VideoData from '../../Data/VideoData';
import { Collections } from './Components/Collections';
import './Video.scss';

export const Video = () => {

    const videoContent = VideoData.map(item => <Collections 
                            collection={item.collection} 
                            content={item.content}
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
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/EuSqrA1TG1U" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    )
}