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

    const currentPart = useSelector(
        (state: RootState) => state.parts.currentParts
    )

    return (
        <div className="full-screen container flex">
            <div className="go-back flex desktop-only">
                <Link to="/parts" ><i className="fas fa-arrow-left" /><span>Все ноты</span></Link>
            </div>
            <img src={currentPart.src} alt="" />
            <div className="actions flex">
                <h2>{currentPart.name}</h2>
                <a href={currentPart.link} download>Скачать</a>
            </div>
        </div>
    )
}