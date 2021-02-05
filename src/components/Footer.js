import React from 'react'
import '../assets/styles/Footer.scss'
import logo from '../assets/img/logo.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='logo'>
        <img src={logo} alt='Logo DocRed' />
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
