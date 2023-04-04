import React from 'react'
import css from './auth.module.css'
import google from '../image/icon/google.png'
import facebook from '../image/icon/facebook.png'
import yandex from '../image/icon/yandex.png'

export default function auth() {
    return (
        <div className={css.body}>
            <div className={css.btnTop}>
                <button className={css.btnAuth}>Войти</button>
                <button className={css.btnReg}>Зарегистрироваться</button>
            </div>

            <div className={css.input}>
                <p>Логин или номер телефона:</p>
                <input type="text" />
            </div>

            <div className={css.input}>
                <p>Пароль:</p>
                <input type="password" />
            </div>

            <div className={css.btnSignIn}>
                <button className={css.button}>Войти</button>
                <a href="#">Восстановить пароль</a>
            </div>

            <div className={css.loginMethods}>
                <p>Войти через:</p>
                <div className={css.loginMethodsIcon}>
                    <a href="" >
                        <img src={google} alt="Google" />
                    </a>

                    <a href="" >
                        <img src={facebook} alt="Facebook" />
                    </a>

                    <a href="" >
                        <img src={yandex} alt="Yandex" />
                    </a>
                </div>              
                
            </div>

        </div>
    )
}
