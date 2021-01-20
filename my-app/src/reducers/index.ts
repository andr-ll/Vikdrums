import { combineReducers } from 'redux'
import { RootState } from '../type';
import { audioReducer } from './audio';
import { emailReducer } from './email';
import { partsReducer } from './parts';
import { setClickLoginReducer } from './setClickLogin';
import { usersRecuder } from './users';
import { videosReducer } from "./video";

export const rootReducer = combineReducers<RootState>({
    videos: videosReducer,
    audios: audioReducer,
    emails: emailReducer,
    parts: partsReducer,
    users: usersRecuder,
    setClickFronLogin: setClickLoginReducer
})