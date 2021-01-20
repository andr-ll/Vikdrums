import { Dispatch } from "redux"
import { RegistrationData, UserAddPartData } from "../../type";
import { userAddPart, userLogin, userRemovePart, usersFetchFailed, usersFetchPending, usersFetchSuccess } from "../user";

const usersUrl = 'http://localhost:3003/users';
const userAddPartUrl = 'http://localhost:3003/addPart';
const userRemovePartUrl = 'http://localhost:3003/removePart'

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


export const fetchUserAddPart = (data: UserAddPartData) => {
    return (dispatch: Dispatch) => {
        dispatch(usersFetchPending());
        fetch(userAddPartUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => { dispatch(userAddPart(data)); dispatch(userLogin(data)) } )
            .catch(err => dispatch(usersFetchFailed(err)))
    }
}

export const fetchUserRemovePart = (data: UserAddPartData) => {
    return (dispatch: Dispatch) => {
        dispatch(usersFetchPending());
        fetch(userRemovePartUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => { dispatch(userRemovePart(data)); dispatch(userLogin(data)) } )
            .catch(err => dispatch(usersFetchFailed(err)))
    }
}