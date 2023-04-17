import React, { useState } from 'react'
import css from './pageResult.module.css'
import resultLogo from '../image/img/resultLogo.png'
import arr from '../image/icon/arr.svg'
import { useEffect } from 'react'

export default function PageResult() {

  const [infoCount, setInfoCount] = useState('')
  const [test, setTest] = useState()
  const [test1, setTest1] = useState()
  const token = localStorage.getItem('accessToken')

  const histogramsBody =
  {
    "issueDateInterval": {
      "startDate": "2018-01-01T00:00:00+03:00",
      "endDate": "2022-08-31T23:59:59+03:00"
    },
    "searchContext": {
      "targetSearchEntitiesContext": {
        "targetSearchEntities": [
          {
            "type": "company",
            "sparkId": null,
            "entityId": null,
            "inn": 7710137066,
            "maxFullness": true,
            "inBusinessNews": null
          }
        ],
        "onlyMainRole": true,
        "tonality": "any",
        "onlyWithRiskFactors": false,
        "riskFactors": {
          "and": [],
          "or": [],
          "not": []
        },
        "themes": {
          "and": [],
          "or": [],
          "not": []
        }
      },
      "themesFilter": {
        "and": [],
        "or": [],
        "not": []
      }
    },
    "searchArea": {
      "includedSources": [],
      "excludedSources": [],
      "includedSourceGroups": [],
      "excludedSourceGroups": []
    },
    "attributeFilters": {
      "excludeTechNews": true,
      "excludeAnnouncements": true,
      "excludeDigests": true
    },
    "similarMode": "duplicates",
    "limit": 10,
    "sortType": "sourceInfluence",
    "sortDirectionType": "desc",
    "intervalType": "month",
    "histogramTypes": [
      "totalDocuments",
      "riskFactors"
    ]
  }

  async function getHistograms() {
    const url = `https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(histogramsBody)
    })

    setInfoCount(await response.json());

  }

  async function getObjectId() {
    const url = `https://gateway.scan-interfax.ru/api/v1/objectsearch`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(histogramsBody)
    })
  }

  async function getDocuments() {
    const url = `https://gateway.scan-interfax.ru/api/v1/documents`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify( {
        "ids": ['1:dxx/4oSW0Y/Rm9CYeNC50ZxyUMKt0IrQkdGX0KJoFi1H0JbQo1rSkBvigKBZHdC20Koq0I/CsC0UYwHRhnrCt9CX0Y4O0KvQtGca']
      })
    })
  }



  useEffect(() => {
    infoCount && setTest(infoCount.data[0].data)
    infoCount && setTest1(infoCount.data[1].data)
  }, [infoCount])


  console.log(test);


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
          <button onClick={getObjectId}>TEST1</button>
          <button onClick={getDocuments}>TEST2</button>
        </div>
        <div className={css.summaryTable}>
          <div className={`${css.arr} ${css.arrLeft}`} id='left' >
            <img src={arr} alt="arrow" />
          </div>

          <div className={css.tableBody}>
            <div className={css.period}>Период
              <div className={css.periodData}>
                {test ? test.map((item) => (

                  <p
                    key={item.date}
                    className={css.histogramsData}
                  >
                    {item.date}</p>
                )) : 'LOADING'
                }
              </div>

            </div>
            <div className={css.total}>Всего
              <div className={css.periodData}>
                {test ? test.map((item) => (

                  <p
                    key={item.value}
                    className={css.histogramsData}
                  >
                    {item.value}</p>
                )) : 'LOADING'
                }
              </div>

            </div>
            <div className={css.risk}>Риски
              <div className={css.periodData}>
                {test1 ? test1.map((item) => (

                  <p
                    key={item.date}
                    className={css.histogramsData}
                  >
                    {item.value}</p>
                )) : 'LOADING'
                }
              </div>

            </div>

          </div>

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
