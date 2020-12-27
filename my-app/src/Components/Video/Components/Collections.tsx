import { useState } from "react"
import { VideoContent, VideoContentData } from "./VideoContent"

export interface CollectionsProps {
    collection: string
    content: VideoContentData[]
}

export const Collections = (props: CollectionsProps) => {

    const [contentVisible, setContentVisible] = useState(" ");

    const onCollectionClick = () => {
        contentVisible === " " ? setContentVisible("visible") : setContentVisible(" ")
    }

    const videoList = props.content.map(item =>
        <VideoContent
            data={item}
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