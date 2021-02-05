import React from 'react'
import article from '../assets/img/notice.png'
import '../assets/styles/Aside.scss'
const Aside = () => {
  return (
    <div className='aside'>
      <div className="asideTitle">
        <p>Noticias relacionadas</p>
      </div>
      <div className="articlesContainer">
        <div className="article">
          <div className="image">
            <img src={article} alt="imagen de Noticia"  width="100%"/>
          </div>
          <div className="text">
            Bye
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aside
