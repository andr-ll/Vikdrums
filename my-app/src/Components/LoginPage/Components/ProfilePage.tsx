import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../actions/user";
import { RootState } from "../../../type";
import './ProfilePage.scss'
import { ProfilePartsTemp } from "./ProfilePartsTemp";

export const ProfilePage = () => {

    const dispatch = useDispatch();

    const currentUser = useSelector(
        (state: RootState) => state.users.currentUser
    )

    const userParts = currentUser.data.parts?.map(item => <ProfilePartsTemp link={item.link} name={item.name} src={item.src} />)

    return (
        <React.Fragment>
            <div className="profile-page">
                <h3>Добро пожаловать {currentUser.data.name}!</h3>
                <button onClick={() => dispatch(userLogout())}>Logout</button>
            </div>
            <div className="profile-info flex">
                <div className="info-block flex">
                    <div className="avatar flex">
                        <img src="./../assets/img/Users/newUser.png" alt="" />
                        <input type="file" name="" id="" />
                        <button>Изменить Аватар</button>
                    </div>
                    <div className="user-data">

                    </div>
                </div>
                <div className="courses-block">
                    <h3>Мои ноты</h3>
                    <div className="parts-container flex">
                        {
                            userParts
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}