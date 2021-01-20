import { useState } from "react"

import { VideoContent, VideoContentData } from "./VideoContent"

export interface CollectionsProps {
    collection: string
    content: VideoContentData[]
}


export const Collections = (props: CollectionsProps) => {

    const [contentVisible, setContentVisible] = useState(false);

    const onCollectionClick = () => {
        !contentVisible ? setContentVisible(true) : setContentVisible(false)
    }

    const videoList = props.content.map(item =>
        <VideoContent
            data={item}
            key={item.key}
        />)

    return (
        <div className="video-collection flex">
            <h3 onClick={onCollectionClick} className={`${contentVisible && "headline"}`}>
                {props.collection}
            </h3>
            <div className={`list ${contentVisible && "visible"}`} >
                {videoList}
            </div>
        </div>
    )
}