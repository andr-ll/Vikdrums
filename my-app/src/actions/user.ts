import { UserData } from "../type";

export const UsersFetchPendingAct = "UsersPending";
export const UsersFetchSuccessAct = "GotUsers";
export const UsersFetchFailAct = "UsersFail";
export const UserLoginAct = "UserLogin";
export const UserLogoutAct = "UserLogout";
export const UserRegistrationAct = "UserRegistration";

export type UserAction = 
    | ReturnType<typeof usersFetchPending>
    | ReturnType<typeof usersFetchSuccess>
    | ReturnType<typeof usersFetchFailed>
    | ReturnType<typeof userLogin>
    | ReturnType<typeof userLogout>;



export const usersFetchPending = () => {
    return {
        type: UsersFetchPendingAct,
        payload: undefined
    } as const;
}

export const usersFetchSuccess = (data: UserData[]) => {
    return {
        type: UsersFetchSuccessAct,
        payload: data
    } as const;
}

export const usersFetchFailed = (err: string) => {
    return {
        type: UsersFetchFailAct,
        payload: err
    } as const;
}

export const userLogin = (data: UserData) => {
    return {
        type: UserLoginAct,
        payload: data
    } as const;
}

export const userLogout = () => {
    return {
        type: UserLogoutAct,
        payload: undefined
    } as const;
}