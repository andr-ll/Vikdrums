import { combineReducers } from 'redux'
import { RootState } from '../type';
import { audioReducer } from './audio';
import { emailReducer } from './email';
import { videosReducer } from "./video";

export const rootReducer = combineReducers<RootState>({
    videos: videosReducer,
    audios: audioReducer,
    emails: emailReducer
})