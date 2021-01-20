import React from "react"
import { PartTemplate, PartTemplateData } from "./PartTemplate"


interface PartsContainerProps {
    name: string
    parts: PartTemplateData[]
}


export const PartsContainer = (props: PartsContainerProps) => {

    const PartsList = props.parts.map(item => <PartTemplate 
        data={item}
        key={item.id}
        />)

    return (
        <div className="parts-container">
            <h2>{props.name}</h2>
            <div className="grid">
                { PartsList }
            </div>
        </div>
    )
}