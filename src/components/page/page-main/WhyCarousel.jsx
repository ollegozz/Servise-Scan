import React from 'react'
import css from './whyCarousel.module.css'

import imgCheck from '../../image/img/mainCheck.jpg'
import time from '../../image/icon/time.svg'
import loupe from '../../image/icon/loupe.svg'
import sheild from '../../image/icon/sheild.svg'
import arr from '../../image/icon/arr.svg'

export default function WhyCarousel() {
  return (
      <main className={css.why}>
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
      </main>
  )
}
