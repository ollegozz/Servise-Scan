import React, { useState } from 'react'
import css from './search.module.css'

export default function Search() {

const [inn, setInn] = useState()
  const [state, setState] = useState()


  const handleChange = (e) => {
    setState({ value: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправленное имя: ' + state.value);
    
  }


  return (
    <main className={css.content}>
      <div className={css.form}>
        <form onSubmit={handleSubmit}>
          <label>
            ИНН компании*
            <input type="text"  onChange={handleChange} />
          </label>
          <input type="submit" value="Отправить" />
        </form>
      </div>
    </main>
  )
}
