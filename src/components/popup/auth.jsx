import React, { useContext } from 'react'
import css from './auth.module.css'
import google from '../image/icon/google.png'
import facebook from '../image/icon/facebook.png'
import yandex from '../image/icon/yandex.png'
import { Context } from '../../context'

export default function Auth() {

    const {
        getAuth,
        infoCount, setInfoCount,
        chekForm, setChekForm,
        login, setLogin,
        pass, setPass } = useContext(Context)


    return (
        <div className={css.body}>
            <div className={css.btnTop}>
                <button className={css.btnAuth}>Войти</button>
                <button className={css.btnReg}>Зарегистрироваться</button>
            </div>

            <div className={css.input}>
                {chekForm ?
                    <p>Логин или номер телефона:</p>
                    :
                    <p style={{ color: 'red' }}>Не правильный логин или пароль</p>}

                <input type="text"
                    onChange={e => setLogin(e.target.value)}
                    value={login}
                />
            </div>

            <div className={css.input}>
                {chekForm ?
                    <p>Пароль:</p>
                    :
                    <p style={{ color: 'red' }}>Не правильный логин или пароль</p>}
                <input type="password"
                    onChange={e => setPass(e.target.value)}
                    value={pass}
                />
            </div>

            <div className={css.btnSignIn}>
                <button className={css.button}
                    onClick={getAuth}
                >
                    Войти
                </button>
                <a href="/#">Восстановить пароль</a>
            </div>

            <div className={css.loginMethods}>
                <p>Войти через:</p>
                <div className={css.loginMethodsIcon}>
                    <a href="/#" >
                        <img src={google} alt="Google" />
                    </a>
                    <a href="/#" >
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="/#" >
                        <img src={yandex} alt="Yandex" />
                    </a>
                </div>
            </div>
        </div>
    )
}
