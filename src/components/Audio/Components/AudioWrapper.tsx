export interface AudioWrapperProps {
    data: AudioWrapperData
    handlers: (src: string) => void
}

export interface AudioWrapperData {
    id: number
    name: string
    plus: string
    minus: string
}

export const AudioWrapper = (props: AudioWrapperProps) => {

    return (
        <div className="audio-wrapper flex">
            <h3>{props.data.name}</h3>
            <div className="flex">
                <div className="minus" >
                    <div className="labels">
                        <h4>Минус</h4>
                        <i className="fas fa-drum"></i>
                    </div>
                    <div className="buttons">
                        <button type="button" onClick={() => props.handlers(props.data.minus)}>Слушать</button>
                        <a href={props.data.minus} download>Скачать</a>
                    </div>
                </div>
            </div>
        </div>
    )
}