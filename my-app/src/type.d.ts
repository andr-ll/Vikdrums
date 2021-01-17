export type RootState = {
    videos: VideosState,
    audios: AudioState,
    emails: EmailState
}

// Video Data and all info

export interface VideosState {
    data: VideoData[]
    isLoading: boolean
    err: string
}

export type VideoData = {
    id: number
    collection: string
    content: VideoContentData[]
}

export type VideoContentData = {
    key: number
    name: string
    src: string
}

// Audio Data and all info

export interface AudioState {
    data: AudioData[]
    isLoading: boolean
    err: string
}

export type AudioData = {
    id: number
    name: string
    audio: SongsData[]
}

export type SongsData = {
    id: number
    name: string
    plus: string
    minus: string
}

// Emails

export interface EmailState {
    data: EmailData
    isLoading: boolean
    err: string
}

export type EmailData = {
    id: number
    email: string
}