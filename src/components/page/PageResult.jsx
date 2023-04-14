import React, {useState} from 'react'
import css from './pageResult.module.css'
import resultLogo from '../image/img/resultLogo.png'
import arr from '../image/icon/arr.svg'

export default function PageResult() {

  const [infoCount, setInfoCount] = useState()
  const token = localStorage.getItem('accessToken')

  async function getHistograms() {
    const url = `https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body:  {
        intervalType: 'month',
        histogramTypes: [],
        

      }
    })

    setInfoCount(await response.json());
  }

  

  
  return (
    <div className={css.body}>
      <div className={css.title}>
        <div className={css.titleText}>
          <h1>Ищем. Скоро <br /> будут результаты</h1>
          <p>Поиск может занять некоторое время,<br /> просим сохранять терпение.</p>
        </div>
        <div className={css.titleImg}>
          <img src={resultLogo} alt="asdasd" />
        </div>
      </div>

      <div className={css.summary}>
        <div className={css.summaryTitle}>
          <h2>Общая сводка</h2>
          <p>Найдено 4 221 вариантов</p>
          <button onClick={getHistograms}>TEST</button>
        </div>
        <div className={css.summaryTable}>
          <div className={`${css.arr} ${css.arrLeft}`} id='left' >
            <img src={arr} alt="arrow" />
          </div>

          <div className={css.tableBody}></div>

          <div className={`${css.arr} ${css.arrRight}`} id='right' >
            <img src={arr} alt="arrow" />
          </div>
        </div>
      </div>

      <div className={css.listDock}>
        <h2>Список документов</h2>
        <div className={css.listItem}>
          <div className={css.itemSubTitle}>
            <p className={css.itemDate}>13.09.2021</p>
            <p className={css.itemSorse}><a href="/#">Комсомольская правда KP.RU</a></p>
          </div>
          <div className={css.itemTitle}>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</div>
          <div className={css.itemType}>Технические новости</div>
          <div className={css.itemImage}></div>
          <div className={css.itemText}>
            SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение
             прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. 
             Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, 
             Ozon и других топовых компаниях.
            Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 
            80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 
            2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к 
            собеседованиям и познакомиться с IT-рекрутерами.
          </div>
          <div className={css.itemFooter}>
            <button>Читать в источнике</button>
            <p className={css.itemWord}>2543 слова</p>
          </div>
        </div>
      </div>
      <div className={css.listButton}>
        <button className={css.listButtonMore}>Показать больше</button>
      </div>

    </div>
  )
}
