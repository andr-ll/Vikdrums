export interface VideoContentData {
    key: number
    name: string
    src: string
}

export interface VideoContentProps {
    data: VideoContentData
}

export const VideoContent = (props: VideoContentProps) => {
    return (
        <p>{props.data.name}</p>
    )
}