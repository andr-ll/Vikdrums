import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
// import { useDispatch, useSelector } from 'react-redux';
import { audioData } from '../../mockdata/audioData';
// import { fetchAudios } from '../../state/actions/fetchers/audioData';
// import { RootState } from '../../type';
import './Audio.scss';
import { Collection } from './Components/Collection';


export const Audio = () => {

    // const dispatch = useDispatch();
    // const audioState = useSelector(
    //     (state: RootState) => state.audios.data
    // )

    // useEffect(() => {
    //     dispatch(fetchAudios())
    //     return () => { }
    // },[dispatch])



    const [audioSrc, setAudioSrc] = useState("");

    const onAudioSrcChange = (src: string) => {
        setAudioSrc(src)
    }

    return (
        <section className="audio">
            <div className="container flex">
                <div className="player-container flex">
                    {audioSrc && <ReactAudioPlayer className="player" src={audioSrc} autoPlay controls />}
                </div>

                {audioData.map((item, id) => <Collection data={item} handlers={{ onAudioSrcChange }} key={id} />)}

            </div>
        </section>
    )
}