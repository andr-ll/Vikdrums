import { useDispatch, useSelector } from "react-redux"
import { currentVideoUrl } from "../../../actions/video";
import { RootState } from "../../../type";

export interface VideoContentData {
    key: number
    name: string
    src: string
}

export interface VideoContentProps {
    data: VideoContentData
    key: number
}

export const VideoContent = (props: VideoContentProps) => {

    const videosState = useSelector(
        (state: RootState) => state.videos
    )

    const dispatch = useDispatch();

    const srcChange = () => {
        dispatch(currentVideoUrl(props.data.src))
    }

    return (
        <p onClick={srcChange} className={`${videosState.currentVideo === props.data.src && "headline"}`}>{props.data.name}</p>
    )
}