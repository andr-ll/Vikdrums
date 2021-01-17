import { EmailData } from "../type";

export const EmailFetchPendingAct = 'EmailPending';
export const EmailFetchSuccessAct = 'GotEmail';
export const EmailAddAct = 'EmailAdded';
export const EmailFetchFailAct = 'EmailFail';

export type EmailAction = 
    | ReturnType<typeof emailFetchPending>
    | ReturnType<typeof emailAddSuccess>
    | ReturnType<typeof emailFetchFailed>
    | ReturnType<typeof emailFetchSuccess>;

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

export const emailFetchSuccess = (data: EmailData[]) => {
    return {
        type: EmailFetchSuccessAct,
        payload: data
    } as const
}

export const emailFetchFailed = (err: string) => {
    return {
        type: EmailFetchFailAct,
        payload: err
    } as const
}