import React from 'react'
import css from './PageMain.module.css'
import imgSearch from '../image/img/mainSearch.jpg'
import imgCheck from '../image/img/mainCheck.jpg'
import time from '../image/icon/time.svg'
import loupe from '../image/icon/loupe.svg'
import sheild from '../image/icon/sheild.svg'

export default function PageMain() {
    return (
        <main className={css.main}>
            <div className={css.content}>
                <div className={css.servise}>
                    <div className={css.text}>
                        <h1 className={css.title}>
                            сервис по поиску <br />публикаций <br />о компании <br />по его ИНН
                        </h1>
                        <div className={css.subTitle}>
                            Комплексный анализ публикаций, получение данных<br />
                            в формате PDF на электронную почту.
                        </div>
                        <div className={css.btnCont}>
                            <button className={css.button}>Запросить данные</button>
                        </div>
                    </div>
                    <div className={css.image}>
                        <img src={imgSearch} alt="imgSearch" />
                    </div>
                </div>
                <div className={css.why}>
                    <h1 className={css.whyTitle}>Почему именно мы</h1>
                    <div className={css.carousel}>                        
                        <div className={css.cards}>
                            <div className={css.arr}>&#60;</div>
                            <div className={css.card}>
                                <div className={css.cardIcon}>
                                    <img src={time} alt="time" />
                                </div>
                                <div className={css.cardText}>
                                    Высокая и оперативная скорость обработки заявки
                                </div>
                            </div>
                            <div className={css.card}>
                                <div className={css.cardIcon}>
                                    <img src={loupe} alt="loupe" />
                                </div>
                                <div className={css.cardText}>
                                    Огромная комплексная база данных, 
                                    обеспечивающая объективный ответ на запрос
                                </div>
                            </div>
                            <div className={css.card}>
                                <div className={css.cardIcon}>
                                    <img src={sheild} alt="sheild" />
                                </div>
                                <div className={css.cardText}>
                                    Защита конфеденциальных сведений, не подлежащих 
                                    разглашению по федеральному законодательству
                                </div>
                            </div>
                            <div className={css.arr}>&#62;</div>
                        </div>
                    </div>
                    <div className={css.whyImage}>
                        <img src={imgCheck} alt="imgCheck" />
                    </div>
                </div>
            </div>
        </main>
    )
}
