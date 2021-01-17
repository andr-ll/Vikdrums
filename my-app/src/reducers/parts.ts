import { PartsAction, PartsFetchFailAct, PartsFetchPendingAct, PartsFetchSuccessAct } from "../actions/parts";
import { PartsState } from "../type";

const initialPartsState: PartsState = {
    data: [],
    isLoading: false,
    err: ''
} 


export const partsReducer = (
    state: PartsState = initialPartsState,
    action: PartsAction
) => {
    switch (action.type) {
        case PartsFetchPendingAct:
            return Object.assign({}, state, { isLoading: true })
        case PartsFetchSuccessAct:
            return Object.assign({}, state, { data: action.payload, isLoading: false, err: ''})
        case PartsFetchFailAct:
            return Object.assign({}, state, { isLoading: false, err: action.payload })
        default:
            neverReached(action)
    }
    return state;
}

function neverReached(never: never) { }