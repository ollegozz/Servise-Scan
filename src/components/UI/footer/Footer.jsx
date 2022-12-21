import React from 'react'
import css from './footer.module.css'
import logo from '../../image/icon/logo-opasity.svg'

export default function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.content}>
                <div className={css.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={css.adress}>
                    <div>г. Москва, Цветной б-р, 40</div>
                    <div>+7 495 771 21 11</div>
                    <div>info@skan.ru</div>
                    <p className={css.author}>
                        Copyright. 2022
                    </p>
                </div>
            </div>
        </footer>
    )
}
