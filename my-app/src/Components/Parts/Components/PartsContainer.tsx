import { PartTemplate, PartTemplateData } from "./PartTemplate"

interface PartsContainerProps {
    name: string
    parts: PartTemplateData[]
    handlers: PartsHandlers
}

interface PartsHandlers {
    onPartChange: (part: PartTemplateData) => void
}

export const PartsContainer = (props: PartsContainerProps) => {

    const PartsList = props.parts.map(item => <PartTemplate 
        data={item}
        key={item.name}
        onPartChange={props.handlers.onPartChange}
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