import { EmailData } from "../type";

export const EmailFetchPendingAct = 'EmailPending';
export const EmailAddAct = 'EmailAdded';
export const EmailFetchFeilAct = 'EmailFail';

export type EmailAction = 
    | ReturnType<typeof emailFetchPending>
    | ReturnType<typeof emailAddSuccess>
    | ReturnType<typeof emailFetchFailed>;

export const emailFetchPending = () => {
    return {
        type: EmailFetchPendingAct,
        payload: undefined
    } as const
}

export const emailAddSuccess = (data: EmailData) => {
    return {
        type: EmailAddAct,
        payload: data
    } as const
}

export const emailFetchFailed = (err: string) => {
    return {
        type: EmailFetchFeilAct,
        payload: err
    } as const
}