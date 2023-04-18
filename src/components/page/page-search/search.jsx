import React, { useState } from 'react'
import Input from '../../UI/input/input'
import Select from '../../UI/select/select'
import css from './search.module.css'
import { Link } from 'react-router-dom';

export default function Search() {

  const [inn, setInn] = useState()
  const [amtDoc, setAmtDoc] = useState()
  const [tonality, setTonality] = useState()
  const [startDate, setStartDate] = useState()
  const [finishDate, setFinishtDate] = useState()

  const [maxFullness, setMaxFullness] = useState(false)
  const [inBusinessNews, setInBusinessNews] = useState(false)
  const [onlyMainRole, setOnlyMainRole] = useState(false)
  const [onlyWithRiskFactors, setOnlyWithRiskFactors] = useState(false)
  const [isTechNews, setIsTechNews] = useState(false)
  const [isAnnouncement, setIsAnnouncement] = useState(false)
  const [isDigest, setIsDigest] = useState(false)

  const getLog = (e) => {
    e.preventDefault()
    
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

  function chekMaxFullness() {
    setMaxFullness(!maxFullness)
  }

  function chekInBusinessNews() {
    setInBusinessNews(!inBusinessNews)
  }

  function chekOnlyMainRole() {
    setOnlyMainRole(!onlyMainRole)
  }

  function chekOnlyWithRiskFactors() {
    setOnlyWithRiskFactors(!onlyWithRiskFactors)
  }

  function chekIsTechNews() {
    setIsTechNews(!isTechNews)
  }

  function chekIsAnnouncement() {
    setIsAnnouncement(!isAnnouncement)
  }

  function chekIsDigest() {
    setIsDigest(!isDigest)
  }

  console.log(onlyWithRiskFactors);

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
              <input type="checkbox" onChange={chekMaxFullness}></input>
              <label className={css.formTitle}>
                Признак максимальной полноты</label>
            </div>
            <div className={css.checkbox}>
              <input type="checkbox" onChange={chekInBusinessNews}></input>
              <label className={css.formTitle}>Упоминания в бизнес-контексте</label>
            </div>
            <div className={css.checkbox}>
              <input type="checkbox" onChange={chekOnlyMainRole}></input>
              <label className={css.formTitle}>Главная роль в публикации</label>
            </div>
            <div className={css.checkbox}>
              <input type="checkbox" onChange={chekOnlyWithRiskFactors}></input>
              <label className={css.formTitle}>Публикации только с риск-факторами</label>
            </div>
            <div className={css.checkbox}>
              <input type="checkbox" onChange={chekIsTechNews}></input>
              <label className={css.formTitle}>Включать технические новости рынков</label>
            </div>
            <div className={css.checkbox}>
              <input type="checkbox" onChange={chekIsAnnouncement} ></input>
              <label className={css.formTitle}>Включать анонсы и календари</label>
            </div>
            <div className={css.checkbox}>
              <input type="checkbox" onChange={chekIsDigest}></input>
              <label className={css.formTitle}>Включать сводки новостей</label>
            </div>
          </div>        
        </div>
        <Link to={`./result`}>
          <div className={css.btn}>
            <button className={css.button}
              onClick={getLog}
            >Поиск</button>
          </div>    
        </Link>

           
       <div className={css.note}>
          * Обязательные к заполнению поля
       </div>
        
      </form>
    </main>
  )
}
