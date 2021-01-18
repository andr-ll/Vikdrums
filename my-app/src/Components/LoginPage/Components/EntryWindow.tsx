import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegisteredUser, fetchUsers } from "../../../actions/fetchers/usersData";
import { userLogin } from "../../../actions/user";
import { RegistrationData, RootState } from "../../../type";
import '../myloader/loaders.scss'

export const EntryWindow = () => {
    const dispatch = useDispatch();

    const usersList = useSelector(
        (state: RootState) => state.users.data
    )

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const [entry, setEntry] = useState(true);
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [invalidLog, setInvalidLog] = useState(false);
    const [userExists, setUserExists] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

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
        setIsLoading(true);
        setTimeout(() => {
            let user = usersList.find(item => item.email === login && item.password === pass);
            if (login.includes('@') && login.includes('.')) {
                if (user !== undefined) {
                    setInvalidLog(false);
                    dispatch(userLogin(user))
                } else {
                    setInvalidLog(true);
                }
            } else {
                setInvalidLog(true);
            }
            setIsLoading(false);
        }, 1000)


    }

    const regAction = (dataReg: RegistrationData) => {
        setIsLoading(true);
        setTimeout(() => {
            let newUser = usersList.find(item => item.email === dataReg.email || item.name === dataReg.name);
            if (newUser === undefined) {
                dispatch(fetchRegisteredUser(dataReg));
                setUserExists(false);
            } else {
                setUserExists(true)
            }
            setIsLoading(false);
        }, 1000)


    }

    return (
        <div className="entry-window-wrapper flex">
            <div className="entry-window flex" style={{justifyContent: isLoading ? "center" : "flex-start"}}>
                { isLoading ? <div className="your-loader"></div> : <React.Fragment>
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
                            invalidLog && <span>Введены неправильные логин или пароль.</span>
                        }
                        {
                            !entry && userExists && <span>Такой пользователь уже существует.</span>
                        }
                        {
                            !entry && <input type="text" value={name} placeholder="Придумайте логин..." onChange={evt => setName(evt.target.value)} />
                        }
                        <input type="text" value={login} placeholder="Введите email..." onChange={evt => setLogin(evt.target.value)} />
                        <input type="password" value={pass} placeholder="Введите пароль..." onChange={evt => setPass(evt.target.value)} />
                        <div className="user-action">
                            {
                                entry ? <button onClick={loginAction}>Войти</button>
                                    : <button onClick={() => regAction({ name: name, email: login, password: pass })}>Регистрация</button>
                            }
                        </div>

                    </div>
                </React.Fragment>
                }
            </div>
        </div>
    )
}