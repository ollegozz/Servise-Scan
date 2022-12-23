import React from 'react'
import css from './PageMain.module.css'
import MainSearch from './Search'
import WhyCarousel from './WhyCarousel'
import Tarifs from './Tarifs'


export default function PageMain() {
    return (
        <div className={css.body}>
            <div className={css.content}>
                <MainSearch />
                <WhyCarousel />
                <Tarifs />
            </div>
        </div>
    )
}
