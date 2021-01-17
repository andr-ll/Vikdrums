import { Dispatch } from "redux"
import { audiosFetchFail, audiosFetchPending, audiosFetchSuccess } from "../audio"

const audioUrl = 'http://localhost:3003/audioData'

export const fetchAudios = () => {
    return (dispatch: Dispatch) => {
        dispatch(audiosFetchPending());
        fetch(audioUrl)
            .then(res => res.json())
            .then(audio => dispatch(audiosFetchSuccess(audio)))
            .catch(error => dispatch(audiosFetchFail(error)));
    }
}