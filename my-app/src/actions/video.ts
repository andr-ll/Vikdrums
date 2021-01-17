import { VideoData } from "../type";

export const FetchVideosPendingAct = "PendingPosts";
export const FetchVideosSuccessAct = "GotPosts";
export const FetchVideosFailAct = "FailedPosts";

export type VideosActions = 
    | ReturnType<typeof videosFetchPending>
    | ReturnType<typeof videosFetchSuccess>
    | ReturnType<typeof videosFetchFail>;

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