import React from 'react'
import css from './tarifs.module.css'

import chek from '../../image/icon/chek.svg'
import lamp from '../../image/icon/lamp.svg'
import target from '../../image/icon/target.svg'
import nout from '../../image/icon/nout.svg'


export default function Tarifs() {
  return (
      <main className={css.tarifs}>
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
      </main>
  )
}
