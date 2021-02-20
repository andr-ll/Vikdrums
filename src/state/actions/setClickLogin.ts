export const SetClickLoginAct = "SetClick";

export type SetClickLoginAction = ReturnType<typeof setClickLogin>;


export const setClickLogin = (login: boolean) => {
    return {
        type: SetClickLoginAct,
        payload: login
    } as const
}