import { AudioAction, AudiosFetchFailedAct, AudiosFetchPendingAct, AudiosFetchSuccessAct } from "../actions/audio";
import { AudioState } from "../../type";

const audioState: AudioState = {
    data: [],
    isLoading: false,
    err: ''
}

export const audioReducer = (
    state: AudioState = audioState,
    action: AudioAction
) => {
    switch (action.type) {
        case AudiosFetchPendingAct:
            return Object.assign({}, state, { isLoading: true })
        case AudiosFetchSuccessAct:
            return Object.assign({}, state, {
                data: action.payload,
                isLoading: false,
                err: ''
            })
        case AudiosFetchFailedAct:
            return Object.assign({}, state, { isLoading: false, err: action.payload })

        default: 
            neverReached(action)
    }
    return state;
}

function neverReached(never: never) { }