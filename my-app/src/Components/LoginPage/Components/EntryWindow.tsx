import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../actions/fetchers/usersData";
import { userLogin } from "../../../actions/user";
import { RootState } from "../../../type";

export const EntryWindow = () => {
    const dispatch = useDispatch();

    const usersList = useSelector(
        (state: RootState) => state.users.data
    )

    const currentUser = useSelector(
        (state: RootState) => state.users.currentUser
    )

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const [entry, setEntry] = useState(true);
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [invalidLog, setInvalidLog] = useState(false)

    const onEntry = () => {
        setEntry(true)
    }

    const onRegistration = () => {
        setInvalidLog(false);
        setEntry(false)
        setLogin('');
        setPass('')
    }

    const loginAction = () => {
        const user = usersList.find( item => item.email === login && item.password === pass);
        if (login.includes('@') && login.includes('.')) {
            if (user !== undefined) {
                dispatch(userLogin(user))
            } else {
                setInvalidLog(true);
            }
        } else {
            setInvalidLog(true);
        }
    }

    return (
        <div className="entry-window-wrapper flex">
            <div className="entry-window flex">
                <div className="choice flex">
                    <button
                        onClick={onEntry}
                        style={{
                            borderBottom: entry ? "none" : "2px solid black",
                            color: entry ? "black" : "rgb(161, 161, 161)"
                        }}
                    >
                        Вход</button>
                    <button
                        onClick={onRegistration}
                        style={{
                            borderBottom: !entry ? "none" : "2px solid black",
                            color: !entry ? "black" : "rgb(161, 161, 161)"
                        }}
                    >
                        Регистрация</button>
                </div>
                <div className="inputs flex">
                    {
                        !entry && <input type="text" placeholder="Введите Ваше имя..." />
                    }
                    {
                        invalidLog && <span>Введены неправильные логин или пароль.</span>
                    }
                    <input type="text" value={login} placeholder="Введите email..." onChange={evt => setLogin(evt.target.value)}/>
                    <input type="password" value={pass} placeholder="Введите пароль..." onChange={evt => setPass(evt.target.value)}/>
                    <div className="user-action">
                        {
                            entry ? <button onClick={loginAction}>Войти</button> : <button>Регистрация</button>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}