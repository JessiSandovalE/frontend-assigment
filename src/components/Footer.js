import React from 'react'
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='logo'>
        <img src='./assets/img/logo.png' alt='Logo DocRed' />
      </div>
      <div className='navegation'>
        <a href=''>Preguntas frecuentes</a>
        <a href=''>Contáctenos</a>
        <a href=''>Información</a>
        <a href='' className='copy'> DocRed © 2019. Todos los derechos reservados</a>
      </div>
    </div>
  )
}

export default Footer
