import React, { useState } from "react"
import { useDispatch } from "react-redux" //useSelector
import { Link } from "react-router-dom"
import { setClickLogin } from "../../actions/setClickLogin"
// import { RootState } from "../../type"
import './Header.scss'

export const Header = () => {

    const dispatch = useDispatch();

    // const currentUser = useSelector(
    //     (state: RootState) => state.users.currentUser
    // )

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

                <nav className="flex desktop-only">
                    <Link to="/">Главная</Link>
                    <Link to="/parts" onClick={() => dispatch(setClickLogin(false))}>Ноты</Link>
                    <Link to="/audio">Аудио</Link>
                    <Link to="/video">Видео</Link>
                    <Link to="/about">О Vikdrums</Link>
                    {/* {
                        currentUser.isLoggedIn 
                        ? <Link to="/login" onClick={() => dispatch(setClickLogin(true))}>{currentUser.data.name} </Link> 
                        : <Link to="/login" onClick={() => dispatch(setClickLogin(true))}> Вход </Link>
                    } */}
                </nav>

                <nav className={`flex mobile-only ${navOpen}`}>
                    <Link to="/" onClick={navOpener}>Главная</Link>
                    <Link to="/parts" onClick={() => { dispatch(setClickLogin(false)); navOpener()}}>Ноты</Link>
                    <Link to="/audio" onClick={navOpener}>Аудио</Link>
                    <Link to="/video" onClick={navOpener}>Видео</Link>
                    <Link to="/about" onClick={navOpener}>О Vikdrums</Link>
                    {/* {
                        currentUser.isLoggedIn 
                        ? <Link to="/login" onClick={() => { dispatch(setClickLogin(true)); navOpener()}}>{currentUser.data.name} </Link> 
                        : <Link to="/login" onClick={() => { dispatch(setClickLogin(true)); navOpener()}}> Вход </Link>
                    } */}
                    
                </nav>
                <div className="logo-and-name flex">
                    <h1>Vikdrums.com.ua</h1>
                    <img src="./assets/img/sticks.png" alt="img" />
                </div>
                <div className="social-links flex">
                    <a href="https://www.facebook.com/profile.php?id=100006599078630" target="blank">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCtXCkhHX6H0duCMie7kgJDQ" target="blank">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </header>
    )
}