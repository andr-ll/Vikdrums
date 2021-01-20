import { VideoData } from "../type";

export const FetchVideosPendingAct = "PendingVideos";
export const FetchVideosSuccessAct = "GotVideos";
export const FetchVideosFailAct = "FailedVideos";
export const CurrentVideosUrlAct = "CurrentVideo";

export type VideosActions = 
    | ReturnType<typeof videosFetchPending>
    | ReturnType<typeof videosFetchSuccess>
    | ReturnType<typeof videosFetchFail>
    | ReturnType<typeof currentVideoUrl>;

export const videosFetchPending = () => {
    return {
        type: FetchVideosPendingAct,
        payload: undefined
    } as const;
}

export const videosFetchSuccess = (data: VideoData[]) => {
    return {
        type: FetchVideosSuccessAct,
        payload: data
    } as const;
}

export const videosFetchFail = (err: string) => {
    return {
        type: FetchVideosFailAct,
        payload: err
    } as const;
}

export const currentVideoUrl = (src: string) => {
    return {
        type: CurrentVideosUrlAct,
        payload: src
    } as const;
}