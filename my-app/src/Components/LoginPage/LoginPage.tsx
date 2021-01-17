import { useDispatch, useSelector } from "react-redux"
import { userLogout } from "../../actions/user";
import { RootState } from "../../type"
import { EntryWindow } from "./Components/EntryWindow";
import './LoginPage.scss'

export const LoginPage = () => {
    const dispatch = useDispatch();

    const currentUser = useSelector(
        (state: RootState) => state.users.currentUser
    )

    return (
        <div className="container login-page">
            {
                !currentUser.isLoggedIn ? <EntryWindow />

                    : <div className="user-page">
                        Добро пожаловать {currentUser.data.name}!
                    <button onClick={() => dispatch(userLogout())}>Logout</button>
                    </div>
            }
        </div>

    )
}