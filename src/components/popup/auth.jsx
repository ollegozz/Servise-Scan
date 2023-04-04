import React, {useState} from 'react'
import css from './auth.module.css'
import google from '../image/icon/google.png'
import facebook from '../image/icon/facebook.png'
import yandex from '../image/icon/yandex.png'



export default function Auth() {

    const [login, setLogin] = useState('sf_student6')
    const [pass, setPass] = useState('73r%Lus9Wn')     

    function getAuth() {
        fetch(`https://gateway.scan-interfax.ru/api/v1/account/login/${login}`)
        .then(data => {
            console.log(data);
        })
    }

    return (
        
        <div className={css.body}>
            <div className={css.btnTop}>
                <button className={css.btnAuth}>Войти</button>
                <button className={css.btnReg}>Зарегистрироваться</button>
            </div>

            <div className={css.input}>
                <p>Логин или номер телефона:</p>
                <input type="text" 
                    onChange={e => setLogin(e.target.value)}
                    value={login}
                />
            </div>

            <div className={css.input}>
                <p>Пароль:</p>
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
