import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { RootState } from "../../type"
import { PartTemplateData } from "../Parts/Components/PartTemplate"


import './FullScreen.scss'

export const FullScreen = () => {

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
            </div>
        </div>
    )
}