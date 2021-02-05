import React from 'react'
import '../assets/styles/Article.scss'
import principalArticle from '../assets/img/principalArticle.png'
import crop from '../assets/img/crop.png'

const Article = () => {
  return (
    <div className='articleContainer'>
      <img src={principalArticle} alt='Imagen Principal' />
      <div className="info">
        <div className="titleHeader">
          <p  className="title">Lorem ipsum dolor sit amet elit.</p>
          <button className='save'>Guardar</button>
        </div>
        <div className="infoNotice">
          <img src={crop} alt="logo"/>
          <div className='notices'>
            <h3>Noticias Docred</h3>
              <ul>
                <li>Hace 12 h</li>
                <li>Publicado 12/12/8</li>
                <li>Lectura: 3 min</li>
              </ul>
          </div>
        </div>
        <div className="hastag">
          <div className="item">Medicina interna</div>
          <div className="item">Pediatria</div>
          <div className="item">Obstetrica</div>
        </div>
        <div className="contentNotice">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis natus, blanditiis aperiam minima animi neque fugit eligendi sit in dolore dolor quisquam ducimus assumenda temporibus, at, tenetur accusantium officia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis natus, blanditiis aperiam minima animi neque fugit eligendi sit in dolore dolor quisquam ducimus assumenda temporibus, at, tenetur accusantium officia?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis natus, blanditiis aperiam minima animi neque fugit eligendi sit in dolore dolor quisquam ducimus assumenda temporibus, at, tenetur accusantium officia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis natus, blanditiis aperiam minima animi neque fugit eligendi sit in dolore dolor quisquam ducimus assumenda temporibus, at, tenetur accusantium officia?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis natus, blanditiis aperiam minima animi neque fugit eligendi sit in dolore dolor quisquam ducimus assumenda temporibus, at, tenetur accusantium officia?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis natus, blanditiis aperiam minima animi neque fugit eligendi sit in dolore dolor quisquam ducimus assumenda temporibus, at, tenetur accusantium officia?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis natus, blanditiis aperiam minima animi neque fugit eligendi sit in dolore dolor quisquam ducimus assumenda temporibus, at, tenetur accusantium officia?</p>
        </div>
      </div>
    </div>
  )
}

export default Article
