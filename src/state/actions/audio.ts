import { AudioData } from "../../type";

export const AudiosFetchPendingAct = "AudioPending";
export const AudiosFetchSuccessAct = "GotPending";
export const AudiosFetchFailedAct = "FailedPending";

export type AudioAction = 
    | ReturnType<typeof audiosFetchPending>
    | ReturnType<typeof audiosFetchSuccess>
    | ReturnType<typeof audiosFetchFail>;

export const audiosFetchPending = () => {
    return {
        type: AudiosFetchPendingAct,
        payload: undefined
    } as const;
}

export const audiosFetchSuccess = (data: AudioData[]) => {
    return {
        type: AudiosFetchSuccessAct,
        payload: data
    } as const;
}

export const audiosFetchFail = ( err: string ) => {
    return {
        type: AudiosFetchFailedAct,
        payload: undefined
    } as const;
}
