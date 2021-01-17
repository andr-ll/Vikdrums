import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addEmail, fetchEmail } from "../../../actions/fetchers/emailData";
import { RootState } from "../../../type"

export const Question = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmail())
    }, [dispatch])

    const emailData = useSelector(
        (state: RootState) => state.emails.data
    )

    const registeredEmails = useSelector(
        (state: RootState) => state.emails.registered
    )

    const [emailPlaced, setEmailPlaced] = useState(' ');
    const [properEmail, setProperEmail] = useState(true);
    const [registeredEmail, setRegisteretEmail] = useState(false);

    const formSubmit = () => {
        if (emailPlaced.includes('@') && emailPlaced.includes('.')) {
            if (registeredEmails.find(item => item.email === emailPlaced) !== undefined) {
                setRegisteretEmail(true)
            } else {
                setProperEmail(true)
                dispatch(addEmail({ email: emailPlaced }));
                setEmailPlaced(' ');
                setRegisteretEmail(false);
            }

        } else {
            setProperEmail(false)
        }
    }


    return (
        <section className="question">

            <div className="container">
                {
                    
                    emailData.email !== "" ? <h3 className="added-email">Спасибо, ваш email отправлен!</h3> 

                       : <div>
                            <h2>Возникли вопросы или eсть предложения?</h2>
                            <form className="mail" onSubmit={evt => { evt.preventDefault(); formSubmit() }}>
                                <p>Oставьте свой e-mail - мы обязательно с вами свяжемся!</p>
                                <div className="input-button flex">
                                    <input type="email" value={emailPlaced} name="mail" id="input" placeholder="Введите e-mail..." onChange={evt => setEmailPlaced(evt.target.value)} />
                                    <button type="submit" onSubmit={evt => { evt.preventDefault(); formSubmit() }} >Отправить!</button>
                                </div>
                                {
                                    !properEmail && <span>Введите корректный email!</span>
                                }
                                {
                                    registeredEmail && <span>Такой email уже зарегестрирован!</span>
                                }
                            </form>

                        </div>
                }
            </div>
        </section>
    )
} 