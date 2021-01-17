import { Dispatch } from "redux"
import { emailAddSuccess, emailFetchFailed, emailFetchPending, emailFetchSuccess } from "../email"

const emailUrl = 'http://localhost:3003/emails';

export const fetchEmail = () => {
    return (dispatch: Dispatch) => {
        dispatch(emailFetchPending());
        fetch(emailUrl)
            .then(res => res.json())
            .then(reg => dispatch(emailFetchSuccess(reg)))
            .catch(err => dispatch(emailFetchFailed(err)))
    }
}

export const addEmail = (email: object) => {
    return (dispatch: Dispatch) => {
        dispatch(emailFetchPending());

        fetch(emailUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => dispatch(emailAddSuccess(data)))
            .catch(err => dispatch(emailFetchFailed(err)))
        
    }
}