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
    }, {
        id: 4,
        img: time,
        description: 'Высокая и оперативная скорость обработки заявки'
    }, {
        id: 5,
        img: loupe,
        description: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'
    },
]


export default function WhyCarousel() {

    const [carousel, setCarousel] = useState(dataCarousel)

    const moveSlide = (e) => {
        if (e.currentTarget.id === 'left') {
            const elem = carousel.splice(1, carousel.length)
            setCarousel([...elem, ...carousel])
        } else {
            const elem = carousel.splice(-1, 1)
            setCarousel([...elem, ...carousel])
        }
    }


    return (
        <main className={css.why}>
            <h1 className={css.title}>Почему именно мы</h1>
            <div className={css.carousel}>
                <div className={`${css.arr} ${css.arrLeft}`} id='left' onClick={moveSlide}>
                    <img src={arr} alt="arrow" />
                </div>
                <div className={`${css.arr} ${css.arrRight}`} id='right' onClick={moveSlide}>
                    <img src={arr} alt="arrow" />
                </div>

                <div className={css.cards}>

                    {carousel.map(item => {
                        return (
                            <div className={css.card} key={item.id}>
                                <div className={css.cardIcon}>
                                    <img src={item.img} alt="logo" />
                                </div>
                                <div className={css.cardText}>
                                    {item.description}
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
            <div className={css.whyImage}>
                <img src={imgCheck} alt="imgCheck" />
            </div>
        </main>
    )
}
