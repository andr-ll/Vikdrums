import { useState } from "react"

export const Question = () => {

    const [visible, setVisible] = useState(" ")
    
    const formSubmit = () => {
        setVisible("visible")
    }

    return (
        <section className="question">
            <div className="container">
                <h2>Возникли вопросы? <br/> Есть предложения?</h2>
                <form className="mail">
                    <p>Oставьте свой e-mail - мы обязательно с вами свяжемся!</p>
                    <div className="input-button flex">
                        <input type="email" name="mail" id="input" placeholder="Введите e-mail..."/>
                        <button type="button" onClick={formSubmit}>Отправить!</button>
                    </div>
                </form>
            </div>
        </section>
    )
} 