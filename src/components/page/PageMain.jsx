import React from 'react'
import css from './PageMain.module.css'
import imgSearch from '../image/img/mainSearch.jpg'
import imgCheck from '../image/img/mainCheck.jpg'
import time from '../image/icon/time.svg'
import loupe from '../image/icon/loupe.svg'
import sheild from '../image/icon/sheild.svg'
import arr from '../image/icon/arr.svg'

export default function PageMain() {
    return (
        <main className={css.main}>
            <div className={css.content}>
                <div className={css.servise}>
                    <div className={css.text}>
                        <h1 className={css.titleName}>
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
                    <h1 className={css.title}>Почему именно мы</h1>
                    <div className={css.carousel}>
                        <div className={css.cards}>
                            <div className={css.arr}>
                                <img className={css.arrLeft} src={arr} alt="arrow" />
                            </div>
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
                            <div className={css.arr}>
                                <img className={css.arrRight} src={arr} alt="arrow" />
                            </div>
                        </div>
                    </div>
                    <div className={css.whyImage}>
                        <img src={imgCheck} alt="imgCheck" />
                    </div>
                </div>

                <div className={css.tarifs}>
                    <h1 className={css.title}>наши тарифы</h1>
                    <div className={css.tarifCards}>
                        <div className={css.tarifCard}>
                            <div className={css.tarifHeader}>
                                <div className={css.tarifTitle}>Beginner</div>
                                <div className={css.tarifSubTitle}>Для небольшого исследования</div>
                            </div>
                            <div className={css.tarifPrice}>
                                <div className={css.riceTitle}>799 ₽ <span>1 200 ₽</span></div>
                                <div className={css.priceSubTitle}>или 150 ₽/мес. при рассрочке на 24 мес.</div>
                            </div>

                            <div className={css.tarifList}>
                                <div className={css.listTitle}>В тариф входит:
                                    <div className={css.listSubTitle}>или 150 ₽/мес. при рассрочке на 24 мес.</div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
