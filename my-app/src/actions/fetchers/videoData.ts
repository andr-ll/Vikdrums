import { Dispatch } from "redux";
import { videosFetchFail, videosFetchPending, videosFetchSuccess } from "../video";

const videosUrl = 'http://localhost:3003/videoData';

export const fetchVideos = () => {
    return (dispatch: Dispatch) => {
        dispatch(videosFetchPending());
        fetch(videosUrl)
            .then(res => res.json())
            .then(videos => dispatch(videosFetchSuccess(videos)))
            .catch(err => dispatch(videosFetchFail(err)))
    }
}