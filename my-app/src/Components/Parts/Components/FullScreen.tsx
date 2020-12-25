import React from "react"
import { Link } from "react-router-dom"
import { PartTemplateData } from "./PartTemplate"

export const FullScreen = (props: PartTemplateData) => {

    return (
        <div className="full-screen flex">
            <Link to="/parts"><i className="fas fa-arrow-left desktop-only" /></Link>
            <img src={`../.${props.src}`} alt="" />
            <div className="actions flex">
                <h2>{props.name}</h2>
                <a href={`../.${props.link}`} download>Скачать</a>
            </div>
        </div>
    )
}