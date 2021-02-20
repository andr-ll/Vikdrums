import React from "react"
import { Link } from "react-router-dom"

interface MediaCardProps {
    class: string
    header: string
    link: string
    paragraph?: string
}

export const MediaCard = (props: MediaCardProps) => {
    return (
        <Link onClick={() => window.scrollTo(0, 0)}  to={`/${props.link}`}>
            <div className="media-card flex">
                <div className="logo">
                    <i className={props.class} />
                </div>
                <h3>{props.header}</h3>
                <p>{props.paragraph}</p>
            </div>
        </Link>
    )
}