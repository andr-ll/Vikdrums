import './Footer.scss'

export const Footer = () => {
    return (
        <footer>
            <div className="container flex">
                <p>Vikdrums.com.ua</p>
                <div className="social-links flex desktop-only">
                    <a href="https://www.facebook.com/profile.php?id=100006599078630" target="blank">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCtXCkhHX6H0duCMie7kgJDQ" target="blank">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
                <p>© Made by <a href="https://www.instagram.com/andr__ll" target="blank">Andr-II</a>, 2021</p>
            </div>
        </footer>
    )
}