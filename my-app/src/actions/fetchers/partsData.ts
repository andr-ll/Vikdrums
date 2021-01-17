import { Dispatch } from "redux";
import { partsFetchFail, partsFetchPending, partsFetchSuccess } from "../parts";

const partsUrl = 'http://localhost:3003/partsData';

export const fetchParts = () => { 
    return (dispatch: Dispatch) => {
        dispatch(partsFetchPending());
        fetch(partsUrl)
            .then(res => res.json())
            .then(parts => dispatch(partsFetchSuccess(parts)))
            .catch(err => dispatch(partsFetchFail(err)))
    }
}