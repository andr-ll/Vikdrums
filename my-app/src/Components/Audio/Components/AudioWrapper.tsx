export interface AudioWrapperProps {
    data: AudioWrapperData
    handlers: (src: string) => void
}

export interface AudioWrapperData {
    name: string
    plus: string
    minus: string
}

export const AudioWrapper = (props: AudioWrapperProps) => {

    return (
        <div className="audio-wrapper flex">
            <h3>{props.data.name}</h3>
            <div className="flex">
                <div className="plus" onClick={() => props.handlers(props.data.plus)}>
                    <h4>Плюс</h4>
                    <i className="fas fa-music"></i>
                    <button type="button">Слушать</button>
                    <a href="" download>Скачать</a>
                </div>
                <div className="minus" onClick={() => props.handlers(props.data.minus)}>
                    <h4>Минус</h4>
                    <i className="fas fa-drum"></i>
                    <button type="button">Слушать</button>
                    <a href="" download>Скачать</a>
                </div>
            </div>
        </div>
    )
}