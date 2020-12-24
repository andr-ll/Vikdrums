import React from "react"
import { Link } from "react-router-dom"

interface AboutPartsProps {
    scroll: number
}

export const AboutParts = (props: AboutPartsProps) => {
    return (
        <section className="about-parts container flex">
            <div className="logo desktop-only">
                <img src="./assets/img/parts.png" alt="" style={{left: props.scroll < 400 ? "-150%" : "0"}}/>
            </div>
            <div className="description flex">
                <h2>Огромная нотная база</h2>
                <div className="logo mobile-only">
                    <img src="./assets/img/parts.png" alt="" />
                </div>
                <p>
                    Транскрипции партий лучших барабанщиков мира.<br />
                    Широкое разнообразие музыкальных произведений.<br />
                    Для барабанщиков с любым уровнем и опытом.
                </p>
                <Link className="to-parts" to="/parts">Перейти к нотам</Link>
            </div>
        </section>
    )
}
