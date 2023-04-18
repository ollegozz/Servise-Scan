import React, { useContext } from 'react'
import css from './search.module.css'
import imgSearch from '../../image/img/mainSearch.jpg'
import { Link } from 'react-router-dom';
import { Context } from '../../../context';

export default function MainSearch() {

    const { authDone, getAuth } = useContext(Context)

    return (
        <main className={css.servise}>
            <div className={css.text}>
                <h1 className={css.title}>
                    сервис по поиску <br />публикаций <br />о компании <br />по его ИНН
                </h1>
                <div className={css.subTitle}>
                    Комплексный анализ публикаций, получение данных<br />
                    в формате PDF на электронную почту.
                </div>
                <div className={css.btnCont}>
                    <Link to={`./search`}>
                        {authDone ? <button className={css.button}>
                            Запросить данные
                        </button>
                            :
                            <button disabled
                            onClick={getAuth}
                            className={`${css.button} ${css.buttonDis} `}>
                                Запросить данные
                            </button>}

                    </Link>
                </div>
            </div>
            <div className={css.image}>
                <img src={imgSearch} alt="imgSearch" />
            </div>
        </main>
    )
}
