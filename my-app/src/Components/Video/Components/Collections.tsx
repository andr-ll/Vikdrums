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

    return (
        <div className="video-collection flex">
            <h3 onClick={onCollectionClick} className={`${contentVisible && "headline"}`}>
                {props.collection}
            </h3>
            <div className={`list ${contentVisible && "visible"}`} >
                {props.content.map(item => <VideoContent data={item} key={item.key}/>)}
            </div>
        </div>
    )
}