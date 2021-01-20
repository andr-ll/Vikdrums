import { useState } from "react";

export interface VideoContentData {
    key: number
    name: string
    src: string
}

export interface VideoContentProps {
    data: VideoContentData
    key: number
    onSrcChange: (newSrc: string) => void
}

export const VideoContent = (props: VideoContentProps) => {

    const srcChange = () => {
        props.onSrcChange(props.data.src)
    }

    return (
        <p onClick={srcChange}>{props.data.name}</p>
    )
}