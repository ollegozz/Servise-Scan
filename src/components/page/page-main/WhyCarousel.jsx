import React, { useState } from 'react'
import css from './whyCarousel.module.css'

import imgCheck from '../../image/img/mainCheck.jpg'
import time from '../../image/icon/time.svg'
import loupe from '../../image/icon/loupe.svg'
import sheild from '../../image/icon/sheild.svg'
import arr from '../../image/icon/arr.svg'

const dataCarousel = [
    {
        id: 1,
        img: time,
        description: 'Высокая и оперативная скорость обработки заявки'
    }, {
        id: 2,
        img: loupe,
        description: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'
    }, {
        id: 3,
        img: sheild,
        description: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'
    }
]


export default function WhyCarousel() {

    const [carousel, setCarousel] = useState(dataCarousel)

    const moveSlide = (e) => {
        if (e.currentTarget.id === 'left') {
            setCarousel(dataCarousel.unshift(dataCarousel.pop()))
            
        } else {
            console.log('right');
        }
    }

    console.log(carousel);


    return (
        <main className={css.why}>
            <h1 className={css.title}>Почему именно мы</h1>
            <div className={css.carousel}>
                <div className={css.cards}>
                    <div className={css.arr} id='left' onClick={moveSlide}>
                        <img className={css.arrLeft} src={arr} alt="arrow" />
                    </div>
                    {dataCarousel.map(item => (
                        <div className={css.card} key={item.id}>
                            <div className={css.cardIcon}>
                                <img src={item.img} alt="" />
                            </div>
                            <div className={css.cardText}>
                                {item.description}
                            </div>
                        </div>
                    ))}
                    <div className={css.arr} id='right' onClick={moveSlide}>
                        <img className={css.arrRight} src={arr} alt="arrow" />
                    </div>
                </div>
            </div>
            <div className={css.whyImage}>
                <img src={imgCheck} alt="imgCheck" />
            </div>
        </main>
    )
}
