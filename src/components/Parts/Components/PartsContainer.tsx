import React from "react"
import { PartTemplate, PartTemplateData } from "./PartTemplate"



interface PartsContainerProps {
    name: string
    parts: PartTemplateData[]
}


export const PartsContainer = (props: PartsContainerProps) => {
    return (
        <div className="parts-container">
            <h2>{props.name}</h2>
            <div className="grid">
                { props.parts.map((item, id) => <PartTemplate data={item} key={id} />) }
            </div>
        </div>
    )
}