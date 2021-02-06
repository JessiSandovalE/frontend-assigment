import React from 'react'
import '../styles/Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src='./assets/img/logo.png' alt='Logo DocRed' />
      </div>
      <div className='search'>
        <button className='searchButton'>
          <i className='icon-search2'></i>
        </button>
        <input type='text' placeholder='¿Que estas buscando?' />
      </div>
      <div className='home'>
        <i className='icon-home'></i> <span>Inicio</span>
        <i className='icon-down'></i>
      </div>
      <div className='session'>
        <div className='bell'>
          <i className='icon-bell'></i>
        </div>
        <div className='user'>
          <img src='./assets/img/jessica.jpg'/>
          <i className='icon-down'></i>
        </div>
        <div className='config'>
          <i className='icon-config'></i>
        </div>
      </div>
    </div>
  )
}

export default Header
