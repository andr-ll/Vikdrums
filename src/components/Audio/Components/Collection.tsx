import React from "react"
import { AudioWrapper, AudioWrapperData } from "./AudioWrapper"


export interface CollectionProps {
    data: CollectionData
    handlers: CollectionHandlers
}

export interface CollectionData {
    name: string
    audio: AudioWrapperData[]
}

interface CollectionHandlers {
    onAudioSrcChange: (src: string) => void
}

export const Collection = (props: CollectionProps) => {
    return (
        <div className="collection-wrapper">
            <h3>{props.data.name}</h3>
            <div className="grid">
                {props.data.audio.map(item =>
                    <AudioWrapper
                        data={item}
                        handlers={props.handlers.onAudioSrcChange}
                        key={item.id} />
                )}
            </div>
        </div>
    )
}