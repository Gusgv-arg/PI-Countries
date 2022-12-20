import React from 'react'
import style from "../Error/error404.module.css"

function error404() {
  return (
    <div className={style.error404}>
        <p>Error 404. NOT FOUND.</p>    
    </div>
  )
}

export default error404