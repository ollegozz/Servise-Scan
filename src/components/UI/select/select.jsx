import React from 'react'
import css from './select.module.css'

export default function Select({ onChangeSelect }) {
  return (
      <select className={css.select}
          onChange={e => onChangeSelect(e.target.value)}
      >         
              <option>
                  
              </option>          
              <option>
                  Любая
              </option>          
              <option>
                  Другая
              </option>          
      </select>
  )
}
