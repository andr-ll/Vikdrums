import { AudioWrapper, AudioWrapperData } from "./AudioWrapper"

export interface CollectionProps {
    name: string
    audio: AudioWrapperData[]
    handlers: CollectionHandlers
}

interface CollectionHandlers {
    onAudioSrcChange: (src: string) => void
}


export const Collection = (props: CollectionProps) => {

    const AudioContent = props.audio.map(item => <AudioWrapper 
        data={item} 
        handlers={props.handlers.onAudioSrcChange} 
        />)

    return (
        <div className="collection-wrapper">
            <h3>{props.name}</h3>
            <div className="grid">
                {AudioContent}
            </div>
        </div>
    )
}