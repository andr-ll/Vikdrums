import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../actions/fetchers/videoData';
import { RootState } from '../../type';
// import VideoData from '../../Data/VideoData';
import { Collections } from './Components/Collections';
import './Video.scss';

export const Video = () => {

    const dispatch = useDispatch();

    
    const videosState = useSelector(
        (state: RootState) => state.videos
    );

    useEffect(() => {
        dispatch(fetchVideos());
    },[dispatch])

    const videoContent = videosState.data.map(item => <Collections 
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
                    width="650" 
                    title="video"
                    height="425" 
                    src={videosState.currentVideo} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    )
}