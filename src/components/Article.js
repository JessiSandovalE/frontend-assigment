import React, { useContext } from 'react'
//Context
import { ArticleContext } from '../context/article'
import '../styles/Article.scss'



const Article = () => {
  const {
    article
  } = useContext(ArticleContext)
  console.log(article)
  return (
    <div className='articleContainer'>
      <img src='./assets/img/principalArticle.png' alt='Imagen Principal' />
      <div className='info'>
        <div className='titleHeader'>
          <p  className='title'>{article.title}</p>
          <button className='save'>Guardar</button>
        </div>
        <div className='infoNotice'>
          <img src='./assets/img/docIcon.png' alt='logo'/>
          <div className='notices'>
            <h3>Noticias Docred</h3>
              <ul>
                <li>Hace 12 h</li>
                <li>Publicado 12/12/8</li>
                <li>Lectura: 3 min</li>
              </ul>
          </div>
        </div>
        <div className='hastag'>
          <div className='item'>Medicina interna</div>
          <div className='item'>Pediatria</div>
          <div className='item'>Obstetrica</div>
        </div>
        <div className='contentNotice' dangerouslySetInnerHTML={{ __html: article.content }}>
        </div>
        <div className='contentActions'>
          <div className='icons'>
            <div className='iconItem'>
              <i className='icon-start'></i> <span>Destacar</span>
            </div>
            <div className='iconItem'>
              <i className='icon-textBox'></i> <span> Comentar </span>
            </div>
            <div className='iconItem'>
              <i className='icon-arrow-up-right2'></i> <span>Compartir </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
