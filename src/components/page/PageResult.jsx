import React, { useState, useEffect, useContext } from 'react'
import css from './pageResult.module.css'
import resultLogo from '../image/img/resultLogo.png'
// import arr from '../image/icon/arr.png'
import { Context } from '../../context'


export default function PageResult() {

  const { infoHistograms, getHistograms, histogramsBody, } = useContext(Context)

  const [period, setPeriod] = useState()
  const [risk, setRisk] = useState()
  const [content, setContent] = useState()
  const [objectId, setObjectId] = useState()
  const token = localStorage.getItem('accessToken')

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
    const data = await response.json()
    return setObjectId(data)
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
      body: JSON.stringify({
        "ids": objectId.items.map((item) => {
          return item.encodedId
        })
      })
    })
    const data = await response.json()
    return setContent(data)
  }


  useEffect(() => {
    infoHistograms && setPeriod(infoHistograms.data[0].data)
    infoHistograms && setRisk(infoHistograms.data[1].data)
  }, [infoHistograms])

  useEffect(() => {
    getObjectId()
    getHistograms()
  }, [])

  useEffect(() => {
    getDocuments()
  }, [objectId])


  // console.log(period);

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
          <p>Найдено 5 вариантов</p>
        </div>
        <div className={css.summaryTable}>
          <div className={`${css.arr} ${css.arrLeft}`} id='left' >
            <p>	&lt; </p>
          </div>

          <div className={css.tableBody}>
            <div className={css.period}><p>Период</p> 
              <div className={css.periodData}>
                {period ? period.map((item) => (

                  <div
                    key={item.date}
                    className={css.histogramsData}
                  >
                    {item.date.split('T',1)}</div>
                )) : 'LOADING'
                }
              </div>

            </div>
            <div className={css.total}><p>Всего</p>
              <div className={css.periodData}>
                {period ? period.map((item) => (

                  <div
                    key={item.value}
                    className={css.histogramsData}
                  >
                    {item.value}</div>
                )) : 'LOADING'
                }
              </div>

            </div>
            <div className={css.risk}><p>Риски</p>
              <div className={css.periodData}>
                {risk ? risk.map((item) => (

                  <div
                    key={item.date}
                    className={css.histogramsData}
                  >
                    {item.value}</div>
                )) : 'LOADING'
                }
              </div>

            </div>

          </div>

          <div className={`${css.arr} ${css.arrRight}`} id='right' >
            <p>	&gt; </p>
          </div>
        </div>
      </div>

      <div className={css.listDock}>
        <h2>Список документов</h2>
        <div className={css.listItems}>
        {content && content.map((item) => {
          return (
            <div className={css.listItem} key={item.ok.id}>
              <div className={css.itemSubTitle}>
                <p className={css.itemDate}>{item.ok.issueDate.split('T', 1)}</p>
                <p className={css.itemSorse}><a href={item.ok.url}>{item.ok.source.name}</a></p>
              </div>

              <div className={css.itemTitle}>{item.ok.title.text}</div>
              <div className={css.itemType}>{item.ok.entities.tags}</div>
              <div className={css.itemImage}></div>

              {/* <div className={css.itemText}>{}</div> */}
              {/* <div className={css.itemText}>{item.ok.content.markup}</div> */}

              <div className={css.itemFooter}>
                <button><a href={item.ok.url}>Читать в источнике</a></button>
                <p className={css.itemWord}>{item.ok.attributes.wordCount}</p>
              </div>

            </div>
          )
        }
        )}
        </div>
      </div>
      <div className={css.listButton}>
        <button className={css.listButtonMore}>Показать больше</button>
      </div>

    </div>
  )
}
