import { Dispatch } from "redux"
import { usersFetchFailed, usersFetchPending, usersFetchSuccess } from "../user";

const usersUrl = 'http://localhost:3003/users';

export const fetchUsers = () => {
    return (dispatch: Dispatch) => {
        dispatch(usersFetchPending());
        fetch(usersUrl)
            .then(res => res.json())
            .then(data => dispatch(usersFetchSuccess(data)))
            .catch(err => dispatch(usersFetchFailed(err)))
    }
}