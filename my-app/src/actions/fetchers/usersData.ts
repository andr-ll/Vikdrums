import { Dispatch } from "redux"
import { RegistrationData } from "../../type";
import { userLogin, usersFetchFailed, usersFetchPending, usersFetchSuccess } from "../user";

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

export const fetchRegisteredUser = (dataReg: RegistrationData) => {

    return (dispatch: Dispatch) => {
        dispatch(usersFetchPending());
        fetch(usersUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dataReg)
        })
            .then(res => res.json())
            .then(data => { dispatch(usersFetchSuccess(data.user)); dispatch(userLogin(data.newUser)) } )
            .catch(err => dispatch(usersFetchFailed(err)))
    }
}
