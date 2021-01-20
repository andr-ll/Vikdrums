import { SetClickLoginAct, SetClickLoginAction } from "../actions/setClickLogin";


export const setClickLoginReducer = (
    state: boolean = false,
    action: SetClickLoginAction
) => {
    switch (action.type) {
        case SetClickLoginAct:
            return state = action.payload;
    }
    return state;
}
