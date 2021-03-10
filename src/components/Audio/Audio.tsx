import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { audioData } from '../../mockdata/audioData';
import { Collection } from './Components/Collection';

import './Audio.scss';


export const Audio = () => {

    const [audioSrc, setAudioSrc] = useState("");

    const onAudioSrcChange = (src: string) => {
        setAudioSrc(src)
    }

    return (
        <section className="audio">
            <div className="player-container flex">
                {audioSrc && <ReactAudioPlayer className="player" src={audioSrc} autoPlay controls />}
            </div>
            <div className="container flex">
                {audioData.map((item, id) => <Collection data={item} handlers={{ onAudioSrcChange }} key={id} />)}
            </div>
        </section>
    )
}