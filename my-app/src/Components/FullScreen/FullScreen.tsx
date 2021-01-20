import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchUserAddPart, fetchUserRemovePart } from "../../actions/fetchers/usersData"
import { RootState } from "../../type"


import './FullScreen.scss'

export const FullScreen = () => {

    const dispatch = useDispatch();

    const isClickFromLogin = useSelector(
        (state: RootState) => state.setClickFronLogin
    )

    const isCurrentUser = useSelector(
        (state: RootState) => state.users.currentUser
    )

    const currentPart = useSelector(
        (state: RootState) => state.parts.currentParts
    )

    return (
        <div className="full-screen container flex">
            <div className="go-back flex">
                {
                    !isCurrentUser.isLoggedIn ? <Link to="/parts"><i className="fas fa-arrow-left desktop-only" /><span>Все ноты</span></Link> :
                        <React.Fragment>
                            {
                                isClickFromLogin ?
                                    <Link to="/login"><i className="fas fa-arrow-left desktop-only" /><span>Профиль</span></Link>
                                    : <Link to="/parts"><i className="fas fa-arrow-left desktop-only" /><span>Все ноты</span></Link>
                            }
                        </React.Fragment>
                }
            </div>
            <img src={currentPart.src} alt="" />
            <div className="actions flex">
                <h2>{currentPart.name}</h2>
                <a href={currentPart.link} download>Скачать</a>
                {
                    isCurrentUser.isLoggedIn 
                    && isCurrentUser.data.parts?.find(item => item.name === currentPart.name) === undefined 
                    && <button onClick={() => dispatch(fetchUserAddPart({ userData: isCurrentUser.data, partData: currentPart }))}>Добавить в "Мои Ноты"</button>
                }
                {
                    isCurrentUser.isLoggedIn 
                    && isCurrentUser.data.parts?.find(item => item.name === currentPart.name) !== undefined 
                    && <button className="remove-btn" onClick={() => dispatch(fetchUserRemovePart({ userData: isCurrentUser.data, partData: currentPart }))}>Удалить из "Мои Ноты"</button>
                }
            </div>
        </div>
    )
}