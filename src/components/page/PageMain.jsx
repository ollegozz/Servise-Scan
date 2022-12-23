import React from 'react'
import css from './PageMain.module.css'
import imgSearch from '../image/img/mainSearch.jpg'
import imgCheck from '../image/img/mainCheck.jpg'
import time from '../image/icon/time.svg'
import loupe from '../image/icon/loupe.svg'
import sheild from '../image/icon/sheild.svg'
import arr from '../image/icon/arr.svg'
import chek from '../image/icon/chek.svg'
import lamp from '../image/icon/lamp.svg'
import target from '../image/icon/target.svg'
import nout from '../image/icon/nout.svg'


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
                            <div className={`${css.tarifHeader} ${css.beginer}`}>
                                <div className={css.tarifTitle}>Beginner</div>
                                <div className={css.tarifSubTitle}>Для небольшого исследования</div>
                                <img className={css.tarifImg} src={lamp} alt="lamp" />
                            </div>
                            <div className={css.tarifPrice}>
                                <div className={css.priceTitle}>799 ₽ <span>1 200 ₽</span></div>
                                <div className={css.priceSubTitle}>или 150 ₽/мес. при рассрочке на 24 мес.</div>
                            </div>
                            <div className={css.tarifList}>
                                <div className={css.listTitle}>В тариф входит:</div>
                                    <div className={css.listChek}>
                                        <img src={chek} alt="" />
                                        <span>Безлимитная история запросов</span>
                                    </div>
                                    <div className={css.listChek}>
                                        <img src={chek} alt="" />
                                        <span>Безопасная сделка</span>
                                    </div>
                                    <div className={css.listChek}>
                                        <img src={chek} alt="" />
                                        <span>Поддержка 24/7</span>
                                    </div>
                                
                            </div>
                            <div className={css.btn}>
                                <button className={`${css.button} ${css.btnAct}`}>Перейти в личный кабинет</button>
                            </div>
                        </div>

                        <div className={css.tarifCard}>
                            <div className={`${css.tarifHeader} ${css.pro}`}>
                                <div className={css.tarifTitle}>Pro</div>
                                <div className={css.tarifSubTitle}>Для HR и фрилансеров</div>
                                <img className={`${css.tarifImg} ${css.targetImg}`} src={target} alt="target" />
                            </div>
                            <div className={css.tarifPrice}>
                                <div className={css.priceTitle}>1 299 ₽ <span>2 600 ₽</span></div>
                                <div className={css.priceSubTitle}>или 279 ₽/мес. при рассрочке на 24 мес.</div>
                            </div>
                            <div className={css.tarifList}>
                                <div className={css.listTitle}>В тариф входит:</div>
                                    <div className={css.listChek}>
                                        <img src={chek} alt="" />
                                        <span>Все пункты тарифа Beginner</span>
                                    </div>
                                    <div className={css.listChek}>
                                        <img src={chek} alt="" />
                                        <span>Экспорт истории</span>
                                    </div>
                                    <div className={css.listChek}>
                                        <img src={chek} alt="" />
                                        <span>Рекомендации по приоритетам</span>
                                    </div>
                                
                            </div>
                            <div className={css.btn}>
                                <button className={css.button}>Подробнее</button>
                            </div>
                        </div>

                        <div className={css.tarifCard}>
                            <div className={`${css.tarifHeader} ${css.business}`}>
                                <div className={css.tarifTitle}>Business</div>
                                <div className={css.tarifSubTitle}>Для корпоративных клиентов</div>
                                <img className={css.tarifImg} src={nout} alt="nout" />
                            </div>
                            <div className={css.tarifPrice}>
                                <div className={css.priceTitle}>2 379 ₽ <span>3 700 ₽</span></div>
                                <div className={css.priceSubTitle}>или 279 ₽/мес. при рассрочке на 24 мес.</div>
                            </div>
                            <div className={css.tarifList}>
                                <div className={css.listTitle}>В тариф входит:</div>
                                    <div className={css.listChek}>
                                        <img src={chek} alt="" />
                                        <span>Все пункты тарифа Pro</span>
                                    </div>
                                    <div className={css.listChek}>
                                        <img src={chek} alt="" />
                                        <span>Безлимитное количество запросов</span>
                                    </div>
                                    <div className={css.listChek}>
                                        <img src={chek} alt="" />
                                        <span>Приоритетная поддержка</span>
                                    </div>
                                
                            </div>
                            <div className={css.btn}>
                                <button className={css.button}>Подробнее</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
