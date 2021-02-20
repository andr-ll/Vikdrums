import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { currentPartFullSize } from "../../../state/actions/parts";

export interface PartTemplateData {
    id: number
    link: string
    src: string
    name: string
}

export interface PartTemplateProps {
    data: PartTemplateData
}

export const PartTemplate = (props: PartTemplateProps) => {

    const dispatch = useDispatch();

    return (
        <Link to="/fullscreen" className="part-wrapper" onClick={() => dispatch(currentPartFullSize(props.data))}>
            <div className="part flex">
                <img src={props.data.src} alt="img" />
                <p>{props.data.name}</p>
            </div>
        </Link>
    )
}