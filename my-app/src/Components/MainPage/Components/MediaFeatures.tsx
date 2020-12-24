import React from "react"
import { MediaCard } from "./MediaCard"

interface AudioFeaturesProps {
    scroll: number
}

export const AudioFeatures = (props: AudioFeaturesProps) => {

    const screenWidth = document.documentElement.clientWidth
    let scrollValue = 1010;
    if (screenWidth < 900) {
        scrollValue = 630
    } else {
        scrollValue = 1010
    }

    return (
        <section className="media-features">
            <div className="container">
                <h2>
                    Аудио треки с барабанами и без, <br /> а также видео
                    </h2>
                <div className="media-cards flex" style={{opacity: props.scroll < scrollValue ? "0" : "1"}}>
                    <MediaCard
                        class={"fas fa-drum"}
                        header={"Слушай оригиналы песен"}
                        link={"plus"}
                        paragraph='В разделе "Плюс" собраны аудио записи, с точными партиями.'
                    />
                    <MediaCard
                        class={"fas fa-volume-mute"}
                        header={"Занимайся с треком без барабанов"}
                        link={"minus"}
                        paragraph='В большенстве записей добавлен метроном. Это поможет ориентироваться в песне'
                    />
                    <MediaCard
                        class={"fab fa-youtube"}
                        header={"Застрял? Проверяй на YouTube!"}
                        link={"video"}
                        paragraph='Если не знаешь как играть то или инное место - просто посмотри видео!'
                    />
                </div>
            </div>
        </section>
    )
}