import { EmailAction, EmailAddAct, EmailFetchFailAct, EmailFetchPendingAct, EmailFetchSuccessAct } from "../actions/email";
import { EmailState } from "../type";

const emailInitialState: EmailState = {
    data: {
        id: 0,
        email: ''
    },
    registered: [],
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
        case EmailFetchSuccessAct:
            return Object.assign({}, state, { registered: action.payload, isLoading: false, err: ''})
        case EmailAddAct: 
            return Object.assign({}, state, { data: action.payload, isLoading: false, err: '' })
        case EmailFetchFailAct:
            return Object.assign({}, state, { isLoading: false, err: action.payload })
        default: 
            neverReached(action)
    }
    return state;
}

function neverReached(bener: never) { }