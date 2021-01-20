import { CurrentVideosUrlAct, FetchVideosFailAct, FetchVideosPendingAct, FetchVideosSuccessAct, VideosActions } from "../actions/video";
import { VideosState } from "../type";

const videosState: VideosState = {
    data: [],
    isLoading: false,
    err: '',
    currentVideo: "https://www.youtube.com/embed/EuSqrA1TG1U"
}

export const videosReducer = (
    state: VideosState = videosState,
    action: VideosActions
) => {
    switch (action.type) {
        case FetchVideosPendingAct:
            return Object.assign({}, state, { isLoading: true });
        case FetchVideosSuccessAct:
            return Object.assign({}, state, {
                data: action.payload,
                isLoading: false,
                err: ''
            });
        case FetchVideosFailAct:
            return Object.assign({}, state, { err: action.payload, isLoading: false});
        case CurrentVideosUrlAct:
            return Object.assign({}, state, { currentVideo: action.payload })
        default:
            neverReached(action);
    }
    return state;
}

function neverReached(never: never) { }