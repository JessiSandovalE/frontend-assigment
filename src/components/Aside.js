import React, { useContext } from 'react'
/* import article from '../assets/img/notice.png' */
import { AsideContext } from '../context/aside'

import '../styles/Aside.scss'


const Aside = () => {
  
  const {
    articles
  } = useContext( AsideContext )

  return (
    <div className='aside'>
      <div className='asideTitle'>
        <p>Noticias relacionadas</p>
      </div>
      <div className='articlesContainer'>
        {articles.map(item =>
          <div className='article' key={item.id}>
            <div className='content'>
              <div className='image'>
                <img src={item.image} alt='' width='100%'/>
              </div>
              <div className='text'>
                <a  href="" className='title'>{item.title}</a>
                <div className='author'>{item.autor}</div>
                <div className='icons'>
                  <i className='icon-start'></i> <span>{item.score}</span> 
                  <i className='icon-textBox'></i> <span> {item.comments} </span> 
                  <i className='icon-eye'></i> <span> {item.views} </span>
                </div>
              </div>
            </div>
         </div>
        )}
      </div>
    </div>
  )
}

export default Aside
