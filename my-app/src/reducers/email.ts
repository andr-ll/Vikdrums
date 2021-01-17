import { EmailAction, EmailAddAct, EmailFetchFeilAct, EmailFetchPendingAct } from "../actions/email";
import { EmailState } from "../type";

const emailInitialState: EmailState = {
    data: {
        id: 0,
        email: ''
    },
    isLoading: false,
    err: ''
}

export const emailReducer = (
    state: EmailState = emailInitialState,
    action: EmailAction
) => {
    switch (action.type) {
        case EmailFetchPendingAct:
            return Object.assign({}, state, { isLoading: true })
        case EmailAddAct: 
            return Object.assign({}, state, { data: action.payload, isLoading: false, err: '' })
        case EmailFetchFeilAct:
            return Object.assign({}, state, { isLoading: false, err: action.payload })
        default: 
            neverReached(action)
    }
    return state;
}

function neverReached(bener: never) { }