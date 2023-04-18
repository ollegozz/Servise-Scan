import React, { useContext, useState } from 'react'
import css from './header.module.css'
import logo from '../../image/icon/logo.svg'
import user from '../../image/img/user.jpg'
import { Link } from 'react-router-dom';
import Auth from '../../popup/auth';
import { Context } from '../../../context';
import { useEffect } from 'react';

export default function Header() {

    const { authPopup, authForm, authDone, infoCount } = useContext(Context)

    const [companyLimit, setCompanyLimit] = useState('-')
    const [usedCompanyCount, setUsedCompanyCount] = useState('-')



    useEffect(() => {
        if (infoCount !== undefined) {
            setCompanyLimit(infoCount.eventFiltersInfo.companyLimit)
            setUsedCompanyCount(infoCount.eventFiltersInfo.usedCompanyCount)
        }
    })

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
                    <div className={css.info}>
                        <div>Использовано компаний: <span className={css.infoUse}> - </span></div>
                        <div>Лимит по компаниям: <span className={css.infoLim}> - </span></div>
                    </div>
                    :
                    <div className={css.info}>
                        <div>Использовано компаний: <span className={css.infoUse}>{companyLimit}</span></div>
                        <div>Лимит по компаниям: <span className={css.infoLim}>{usedCompanyCount}</span></div>
                    </div>
                }

                {authDone === false ?
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
                        <button className={css.button}
                        // onClick={authPopup}
                        >
                            Выйти</button>
                        <img className={css.userLogo} src={user} alt="user" />

                    </div>
                }
            </div>
        </header>
    )
}
