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
                    <Link to="/">Главная</Link>
                    <Link to="/video">Видео</Link>
                    <Link to="/parts">Ноты</Link>
                    <Link to="/minus">Минус</Link>
                    <Link to="/plus">Плюс</Link>
                    <Link to="/about">О Vikdrums</Link>
                </nav>
                <div className="logo-and-name flex">
                    <h1>Vikdrums.com.ua</h1>
                    <img src="./assets/img/sticks.png" alt="img"/>
                </div> 
                <div className="social-links flex">
                    <a href="">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </header>
    )
}