import React from 'react'
import '../assets/styles/Header.scss'
import logo from '../assets/img/logo.png'
import lupa from '../assets/img/lupa.svg'
import home from '../assets/img/casa.svg'
const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo } alt='Logo DocRed' />
      </div>
      <div className='search'>
        <button className="searchButton">
          <img src={lupa}/>
        </button>
        <input type='text' placeholder='¿Que estas buscando?' />
      </div>
      <div className="home">
        <a>
          <img src={home} alt='home' />
        </a>
      </div>
      <div className='session'>
        <div className="bell">Campana</div>
        <div className="user">User</div>
        <div className="config">Config</div>
      </div>
    </div>
  )
}

export default Header
