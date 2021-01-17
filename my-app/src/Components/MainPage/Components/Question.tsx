import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addEmail } from "../../../actions/fetchers/emailData";
import { RootState } from "../../../type"

export const Question = () => {

    const emailData = useSelector(
        (state: RootState) => state.emails.data
    )
    const dispatch = useDispatch();

    const [emailPlaced, setEmailPlaced] = useState(' ');
    const [properEmail, setProperEmail] = useState(true);

    const formSubmit = () => {
        if (emailPlaced.includes('@') && emailPlaced.includes('.')) {
            setProperEmail(true)
            dispatch(addEmail({ email: emailPlaced }));
            setEmailPlaced(' ')
        } else {
            setProperEmail(false)
        }
    }


    return (
        <section className="question">

            <div className="container">
                {
                    emailData.email !== "" ? <h3 className="added-email">Спасибо, ваш email отправлен!</h3> :
                        <div>
                            <h2>Возникли вопросы или eсть предложения?</h2>
                            <form className="mail">
                                <p>Oставьте свой e-mail - мы обязательно с вами свяжемся!</p>
                                <div className="input-button flex">
                                    <input type="email" value={emailPlaced} name="mail" id="input" placeholder="Введите e-mail..." onChange={evt => setEmailPlaced(evt.target.value)} />
                                    <button type="button" onClick={formSubmit}>Отправить!</button>
                                </div>
                                {
                                    !properEmail && <span>Введите корректный email!</span>
                                }
                            </form>

                        </div>
                }
            </div>
        </section>
    )
} 