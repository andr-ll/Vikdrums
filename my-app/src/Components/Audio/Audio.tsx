import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAudios } from '../../actions/fetchers/audioData';
import { RootState } from '../../type';
import './Audio.scss';
import { Collection } from './Components/Collection';

export const Audio = () => {

    const dispatch = useDispatch();
    const audioState = useSelector(
        (state: RootState) => state.audios.data
    )

    useEffect(() => {
        dispatch(fetchAudios())
        return () => { }
    },[dispatch])

    const [audioSrc, setAudioSrc] = useState(" ");

    const onAudioSrcChange = (src: string) => {
        setAudioSrc(src)
    }

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
                    {audioState.map(item => <Collection name={item.name} audio={item.audio} handlers={{ onAudioSrcChange }} key={item.id}/>)}
                </div>
            </div>
        </section>
    )
}