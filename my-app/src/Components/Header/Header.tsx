import React, { useState } from "react"
import { Link } from "react-router-dom"
import './Header.scss'

export const Header = () => {

    const [hambIsActive, setHambIsActive] = useState(" ");
    const [navOpen, setNavOpen] = useState(" ");

    const navOpener = () => {
        if (hambIsActive === " ") {
            setHambIsActive("is-active");
            setNavOpen("nav-open")
        } else {
            setHambIsActive(" ");
            setNavOpen(" ")
        }
    }

    return (
        <header>
            <div className="container flex">
                <button
                    className={`hamburger hamburger--spring mobile-only ${hambIsActive}`}
                    type="button"
                    onClick={navOpener}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>

                <nav className={`flex ${navOpen}`}>
                    <Link to="/" onClick={navOpener}>Главная</Link>
                    <Link to="/video" onClick={navOpener}>Видео</Link>
                    <Link to="/parts" onClick={navOpener}>Ноты</Link>
                    <Link to="/minus" onClick={navOpener}>Минус</Link>
                    <Link to="/plus" onClick={navOpener}>Плюс</Link>
                    <Link to="/about" onClick={navOpener}>О Vikdrums</Link>
                </nav>
                <div className="logo-and-name flex">
                    <h1>Vikdrums.com.ua</h1>
                    <img src="./assets/img/sticks.png" alt="img"/>
                </div> 
                <div className="social-links flex">
                    <a href="http://facebook.com" target="blank">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="http://youtube.com" target="blank">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </header>
    )
}