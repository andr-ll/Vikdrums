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
                    Аудио с дорожкой барабанов и без, <br /> а также видео
                    </h2>
                <div className="media-cards flex" style={{opacity: props.scroll < scrollValue ? "0" : "1"}}>
                    <MediaCard
                        class={"fas fa-drum"}
                        header={"Слушай оригиналы песен"}
                        link={"audio"}
                        paragraph='В разделе "Плюс" собраны оригинальные аудио записи с барабанными партиями.'
                    />
                    <MediaCard
                        class={"fas fa-volume-mute"}
                        header={"Занимайся с треком без барабанов"}
                        link={"audio"}
                        paragraph='Большенство записей из раздела "Минус" имеют метроном. Это поможет ориентироваться в песне.'
                    />
                    <MediaCard
                        class={"fab fa-youtube"}
                        header={"Застрял? Проверяй на YouTube!"}
                        link={"video"}
                        paragraph='Если не знаешь как сыграть какое-то место - просто посмотри "Видео"!'
                    />
                </div>
            </div>
        </section>
    )
}