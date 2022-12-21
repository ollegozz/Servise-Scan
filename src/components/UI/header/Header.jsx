import React from 'react'
import css from './header.module.css'
import logo from '../../image/icon/logo.svg'
import user from '../../image/img/user.jpg'

export default function () {
    return (
        <header className={css.header}>
            <div className={css.content}>
                <div className={css.logo}>
                    <img src={logo} alt="logo" />
                </div>
                {/* <div className={css.item}> */}
                <div className={css.menu}>
                    <a href="#">Главная</a>
                    <a href="#">Тарифы</a>
                    <a href="#">FAQ</a>
                </div>
                <div className={css.info}>
                    <div>Использовано компаний: <span className={css.infoUse}>34</span></div>
                    <div>Лимит по компаниям: <span className={css.infoLim}>100</span></div>
                </div>
                {/* </div> */}
                <div className={css.user}>
                    <div className={css.userName}>Алексей А.</div>
                    <button className={css.button}>Выйти</button>
                    <img className={css.userLogo} src={user} alt="user" />
                </div>
            </div>
        </header>
    )
}
