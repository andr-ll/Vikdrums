import { useDispatch, useSelector } from "react-redux"
import { userLogout } from "../../actions/user";
import { RootState } from "../../type"
import { EntryWindow } from "./Components/EntryWindow";
import { ProfilePage } from "./Components/ProfilePage";
import './LoginPage.scss'

export const LoginPage = () => {
    const dispatch = useDispatch();

    const currentUser = useSelector(
        (state: RootState) => state.users.currentUser
    )

    return (
        <div className="container login-page">
            {
                !currentUser.isLoggedIn ? <EntryWindow /> : <ProfilePage />
            }
        </div>

    )
}