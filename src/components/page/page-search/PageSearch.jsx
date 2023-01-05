import React from 'react'
import css from './pageSearch.module.css'

export default function PageSearch() {
    return (
        <main className={css.body}>
            <h1 className={css.title}>
                Найдите необходимые данные в пару кликов.
            </h1>
            <div className={css.subTitle}>
                Задайте параметры поиска. Чем больше заполните, тем точнее поиск
            </div>
        </main>
    )
}
