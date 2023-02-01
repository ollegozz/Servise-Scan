import React, { useState } from 'react'
import Input from '../../UI/input/input'
import Select from '../../UI/select/select'
import css from './search.module.css'

export default function Search() {

  const [inn, setInn] = useState()
  const [amtDoc, setAmtDoc] = useState()
  const [tonality, setTonality] = useState()
  const [startDate, setStartDate] = useState()
  const [finishDate, setFinishtDate] = useState()

  const getLog = (e) => {
    e.preventDefault()
    console.log(inn, amtDoc, tonality, startDate, finishDate)
  }
  

  const onChangeSelect = (e) => {
    setTonality(e)
  }

  const onChangeDateStart = (e) => {
    setStartDate(e)
  }

  const onChangeDateFinish = (e) => {
    setFinishtDate(e)
  }


  return (
    <main className={css.content}>
      <form>
        <div className={css.form}>
          <div className={css.left}>
            <div className={css.formTitle}>ИНН компании*</div>
            <Input
              type='number'
              placeholder='10 цифр'
              onChange={e => setInn(e.target.value)}
            />

            <div className={css.formTitle}>Тональность</div>
            <Select onChangeSelect={onChangeSelect} />

            <div className={css.formTitle}>Количество документов в выдаче*</div>
            <Input
              type='number'
              placeholder='От 1 до 1000'
              onChange={e => setAmtDoc(e.target.value)}
            />

            <div className={css.formTitle}>Диапазон поиска*</div>
            <Input
              style={{ width: 176, marginBottom : 10 }}
              type='date'
              placeholder='Дата начала'
              onChange={e => onChangeDateStart(e.target.value)}
            />
            <Input
              style={{ width: 176 }}
              type='date'
              placeholder='Дата конца'
              onChange={e => onChangeDateFinish(e.target.value)}
            />
          </div>
          <div className={css.right}>
            <div className={css.checkbox}>
              <input type="checkbox"></input>
              <label className={css.formTitle}>Признак максимальной полноты</label>
            </div>
            <div className={css.checkbox}>
              <input type="checkbox"></input>
              <label className={css.formTitle}>Упоминания в бизнес-контексте</label>
            </div>
            <div className={css.checkbox}>
              <input type="checkbox"></input>
              <label className={css.formTitle}>Главная роль в публикации</label>
            </div>
            <div className={css.checkbox}>
              <input type="checkbox"></input>
              <label className={css.formTitle}>Публикации только с риск-факторами</label>
            </div>
            <div className={css.checkbox}>
              <input type="checkbox"></input>
              <label className={css.formTitle}>Включать технические новости рынков</label>
            </div>
            <div className={css.checkbox}>
              <input type="checkbox"></input>
              <label className={css.formTitle}>Включать анонсы и календари</label>
            </div>
            <div className={css.checkbox}>
              <input type="checkbox"></input>
              <label className={css.formTitle}>Включать сводки новостей</label>
            </div>
          </div>        
        </div>
        <div className={css.btn}>
          <button className={css.button}
          onClick={getLog}
          >Поиск</button>
        </div>        
      </form>
    </main>
  )
}
