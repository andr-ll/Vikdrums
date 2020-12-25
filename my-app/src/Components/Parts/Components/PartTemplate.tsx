import React from "react"
import { Link } from "react-router-dom"

export interface PartTemplateData {
    link: string
    src: string
    name: string
}

export interface PartTemplateProps {
    data: PartTemplateData
    onPartChange: (part: PartTemplateData) => void 
}

export const PartTemplate = (props: PartTemplateProps) => {
    return (
        <Link to="/parts/fullscreen" className="part-wrapper" onClick={() => props.onPartChange(props.data)}>
            <div className="part flex">
                <img src={props.data.src} alt="img" />
                <p>{props.data.name}</p>
            </div>
        </Link>
    )
}