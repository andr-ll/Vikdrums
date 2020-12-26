import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import AudioData from '../../Data/AudioData';
import './Audio.scss';
import { Collection } from './Components/Collection';

export const Audio = () => {

    const [audioSrc, setAudioSrc] = useState(" ");

    const onAudioSrcChange = (src: string) => {
        setAudioSrc(src)
    }

    const AudioFiles = AudioData.map(item => <Collection
        name={item.name}
        audio={item.audio}
        handlers={{ onAudioSrcChange }}
        key={item.id}
    />)

    return (
        <section className="audio">
            <div className="container flex">
                <div className="player-container">
                    <ReactAudioPlayer
                        className="player"
                        style={{ display: audioSrc === " " ? "none" : "block" }}
                        src={audioSrc}
                        autoPlay
                        controls
                    />
                </div>
                <div className="files flex">
                    {AudioFiles}
                </div>
            </div>
        </section>
    )
}