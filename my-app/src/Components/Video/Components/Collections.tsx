import { useState } from "react"

import { VideoContent, VideoContentData } from "./VideoContent"

export interface CollectionsProps {
    collection: string
    handlers: CollectionsHandlers
    content: VideoContentData[]
}

export interface CollectionsHandlers {
    onSrcChange: (newSrc: string) => void
}

export const Collections = (props: CollectionsProps) => {

    const [contentVisible, setContentVisible] = useState(" ");

    const onCollectionClick = () => {
        contentVisible === " " ? setContentVisible("visible") : setContentVisible(" ")
    }

    const videoList = props.content.map(item =>
        <VideoContent
            data={item}
            key={item.key}
            onSrcChange={props.handlers.onSrcChange}
        />)

    return (
        <div className="video-collection flex">
            <h3 onClick={onCollectionClick}>
                        {props.collection}
            </h3>
            <div className={`list ${contentVisible}`} >
                {videoList}
            </div>
        </div>
    )
}