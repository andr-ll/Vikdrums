import { useSelector } from 'react-redux';
import { RootState } from '../../type';

import React from 'react';
import { videoData } from '../../mockdata/videoData';
import { Collections } from './Components/Collections';
import './Video.scss';

export const Video = () => {

    const videosState = useSelector(
        (state: RootState) => state.videos
    );

    return (
        <section className="video">
            <div className="container flex">
                <div className="content flex">
                    {videoData.map(item => <Collections collection={item.collection} content={item.content} key={item.id}/>)}
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