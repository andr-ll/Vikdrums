import { UserAction, UserLoginAct, UserLogoutAct, UsersFetchFailAct, UsersFetchPendingAct, UsersFetchSuccessAct } from "../actions/user"
import { AllUsers } from "../type"

const initialUsersState: AllUsers = {
    data: [],
    currentUser: {
        data: {
            id: -1,
            name: '',
            email: '',
            password: '',
            videos: [],
            audios: [],
            parts: [],
            image: ''
        },
        isLoggedIn: false
    },
    isLoading: false,
    err: ''
} 

export const usersRecuder = (
    state: AllUsers = initialUsersState,
    action: UserAction
) => {
    switch (action.type) {
        case UsersFetchPendingAct:
            return Object.assign({}, state, { isLoading: true })
        case UsersFetchSuccessAct:
            return Object.assign({}, state, { data: action.payload, isLoading: false, err: '' })
        case UsersFetchFailAct:
            return Object.assign({}, state, { isLoading: false, err: action.payload })
        case UserLoginAct:
            return Object.assign({}, state, { currentUser: { data: action.payload, isLoggedIn: true} } )
        case UserLogoutAct:
            return Object.assign({}, state, { currentUser: { data: initialUsersState.currentUser.data , isLoggedIn: false} } )
        default:
            neverReached(action)
    }
    return state;
}

function neverReached(never: never) { }