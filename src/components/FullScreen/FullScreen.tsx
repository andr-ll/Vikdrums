import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { currentPartFullSize } from "../../state/actions/parts"
// import { fetchUserAddPart, fetchUserRemovePart } from "../../state/actions/fetchers/usersData"
import { RootState } from "../../type"


import './FullScreen.scss'

export const FullScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        let refPart = JSON.parse(sessionStorage.getItem("part") || "")
        dispatch(currentPartFullSize(refPart))
    }, [dispatch])

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
            <div className="go-back flex desktop-only">
                {
                    !isCurrentUser.isLoggedIn ? <Link to="/parts"><i className="fas fa-arrow-left" /><span>Все ноты</span></Link> :
                        <React.Fragment>
                            {
                                isClickFromLogin ?
                                    <Link to="/login" ><i className="fas fa-arrow-left" /><span>Профиль</span></Link>
                                    : <Link to="/parts" ><i className="fas fa-arrow-left" /><span>Все ноты</span></Link>
                            }
                        </React.Fragment>
                }
            </div>
            <img src={currentPart.src} alt="" />
            <div className="actions flex">
                <h2>{currentPart.name}</h2>
                <a href={currentPart.link} download>Скачать</a>
                {/* {
                    isCurrentUser.isLoggedIn 
                    && isCurrentUser.data.parts?.find(item => item.name === currentPart.name) === undefined 
                    && <button onClick={() => dispatch(fetchUserAddPart({ userData: isCurrentUser.data, partData: currentPart }))}>Добавить в "Мои Ноты"</button>
                }
                {
                    isCurrentUser.isLoggedIn 
                    && isCurrentUser.data.parts?.find(item => item.name === currentPart.name) !== undefined 
                    && <button className="remove-btn" onClick={() => dispatch(fetchUserRemovePart({ userData: isCurrentUser.data, partData: currentPart }))}>Удалить из "Мои Ноты"</button>
                } */}
            </div>
        </div>
    )
}