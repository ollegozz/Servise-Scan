import React from 'react'
import css from './auth.module.css'

export default function auth() {
    return (
        <div className={css.body}>
            <div className={css.btnTop}>
                <button className={css.btnAuth}>Войти</button>
                <button className={css.btnReg}>Зарегистрироваться</button>
            </div>

            <div>
                <p>Логин или номер телефона:</p>
                <input type="text" />
            </div>

            <div>
                <p>Пароль:</p>
                <input type="password" />
            </div>

            <div>
                <button>Войти</button>
                <p>Восстановить пароль</p>
            </div>

            <div>
                <p>Войти через:</p>
                <a href="" >
                    <img src="" alt="Google" />
                </a>

                <a href="google.ru" >
                    <img src="" alt="Facebook" />
                </a>

                <a href="google.ru" >
                    <img src="" alt="Yandex" />
                </a>
                
            </div>

        </div>
    )
}
