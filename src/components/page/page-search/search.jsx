import React, { useState } from 'react'
import Input from '../../UI/input/input'
import css from './search.module.css'

export default function Search() {

const [inn, setInn] = useState()
const [amtDoc, setAmtDoc] = useState()

console.log(inn);
  console.log(amtDoc);



  return (
    <main className={css.content}>
      <div className={css.form}>
        <form>
          <div className={css.formTitle}>ИНН компании*</div>
          <Input 
            placeholder='10 цифр'
            onChange={e => setInn(e.target.value)}
          />

          <div className={css.formTitle}>Количество документов в выдаче</div>
          <Input
            placeholder='От 1 до 1000'
            onChange={e => setAmtDoc(e.target.value)}
          />
        </form>
      </div>
    </main>
  )
}
