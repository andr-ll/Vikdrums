export type RootState = {
    videos: VideosState,
    audios: AudioState,
    emails: EmailState,
    parts: PartsState,
    users: AllUsers
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

// Parts info and everything

export interface PartsState {
    data: CollectionData[]
    isLoading: boolean
    err: string
    currentParts: PartTemplateData
}

export type CollectionData = {
    id: number
    name: string
    parts: PartsData[]
}

export type PartsData = {
    id: number
    name: string
    src: string
    link: string
}

export interface PartTemplateData {
    link: string
    src: string
    name: string
}

// Emails

export interface EmailState {
    data: EmailData
    registered: EmailData[]
    isLoading: boolean
    err: string
}

export type EmailData = {
    id?: number
    email: string
}

// User and everything that he/she includes...

export interface AllUsers {
    data: UserData[]
    currentUser: UserState
    isLoading: boolean
    err: string
}

export interface UserState {
    data: UserData
    isLoggedIn: boolean
}

export type UserData = {
    id: number
    name: string
    email: string
    image?: string
    password: string
    audios?: SongsData[]
    parts?: PartsData[]
    videos?: VideoContentData[]
}

export type RegistrationData = {
    name: string
    email: string
    password: string
}
