import React, { useContext, useState } from 'react'
import css from './header.module.css'
import logo from '../../image/icon/logo.svg'
import user from '../../image/img/user.jpg'
import { Link } from 'react-router-dom';
import Auth from '../../popup/auth';
import { Context } from '../../../context';
import { useEffect } from 'react';

export default function Header() {

    const { authPopup, authForm, authDone, setAuthDone, infoCount } = useContext(Context)

    const [companyLimit, setCompanyLimit] = useState('-')
    const [usedCompanyCount, setUsedCompanyCount] = useState('-')
    const [token, setToken] = useState()

    useEffect(() => {
        if (infoCount !== undefined) {
            setCompanyLimit(infoCount.eventFiltersInfo.companyLimit)
            setUsedCompanyCount(infoCount.eventFiltersInfo.usedCompanyCount)
        }
        setToken(localStorage.getItem('accessToken'))
    })

    function logOut () {
        setAuthDone(!authDone)
        localStorage.removeItem('accessToken')            
    }

    return (
        <header className={css.header}>
            <div className={css.content}>
                <div className={css.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={css.menu}>
                    <Link to={`./`}>Главная</Link>
                    <Link to={`./tarifs`}>Тарифы</Link>
                    <Link to={`./FAQ`}>FAQ</Link>
                </div>
                {authDone === false ?
                    ''
                    :
                    <div className={css.info}>
                        <div>Использовано компаний: <span className={css.infoUse}>{companyLimit}</span></div>
                        <div>Лимит по компаниям: <span className={css.infoLim}>{usedCompanyCount}</span></div>
                    </div>
                }

                {token === null ?
                    <div className={css.user}>
                        <button
                            className={css.btnReg}
                        >
                            Зарегистрироваться</button>
                        <button
                            onClick={authPopup}
                            className={css.btnAuth}
                        >
                            Войти</button>
                        {authForm && <Auth />}
                    </div>
                    :
                    <div className={css.user}>
                        <div className={css.userName}>Алексей А.</div>
                        <Link to={`./`}>
                            <button className={css.button}
                                onClick={logOut}
                            >
                                Выйти</button>
                        </Link>                        
                        <img className={css.userLogo} src={user} alt="user" />

                    </div>
                }
            </div>
        </header>
    )
}
