import React, { useState } from 'react';
import { AboutParts } from './Components/AboutParts'
import { AudioFeatures } from './Components/MediaFeatures';
import './MainPage.scss'

export const MainPage = () => {

    const [windowScroll, setWindowScroll] = useState(0)

    window.addEventListener('scroll', function() {
        setWindowScroll(+window.pageYOffset);
    });

    return (
        <section className="main-page">
            <div className="logo-container">
                <img className="main-logo" src="./assets/img/drumset.jpeg" alt="img" />
            </div>
            <div className="banner flex">
                <h1>Школа игры на ударной установке №1 в Украине!</h1>
            </div>
            <AboutParts scroll={windowScroll}/>
            <AudioFeatures scroll={windowScroll}/>
        </section>
    )
}