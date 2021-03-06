import { useState, useEffect } from 'react';
import { AboutParts } from './Components/AboutParts';
import { AudioFeatures } from './Components/MediaFeatures';
import { Question } from './Components/Question';

import './MainPage.scss'

export const MainPage = () => {

    const [windowScroll, setWindowScroll] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setWindowScroll(+window.pageYOffset);
        });
        return () => {
            window.removeEventListener('scroll', () => { })
            setWindowScroll(0);
        }
    }, [])

    return (
        <section className="main-page">
            <div className="logo-container">
                <img className="main-logo" src="./assets/img/drumset.jpeg" alt="img" />
            </div>
            <div className="banner flex">
                <h1>Школа игры на ударной установке!</h1>
            </div>
            <AboutParts scroll={windowScroll} />
            <AudioFeatures scroll={windowScroll} />
            <Question />
        </section>
    )
}