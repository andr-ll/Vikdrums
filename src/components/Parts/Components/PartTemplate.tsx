import { Link } from "react-router-dom"

export interface PartTemplateData {
    id: number
    link: string
    src: string
    name: string
}

export interface PartTemplateProps {
    data: PartTemplateData
    book: string
}

export const PartTemplate = (props: PartTemplateProps) => {
    return (
        <Link to={`/parts/${props.book}/${props.data.id}`} className="part-wrapper" >
            <div className="part flex">
                <img src={props.data.src} alt="img" />
                <p>{props.data.name}</p>
            </div>
        </Link>
    )
}