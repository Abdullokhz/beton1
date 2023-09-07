import React from 'react'
import '../css/Navbar.css'
import {HiOutlineNewspaper} from 'react-icons/hi'
import {BsFillCalculatorFill} from 'react-icons/bs'
import {RiFileEditLine} from 'react-icons/ri'
import {ImPriceTags} from 'react-icons/im'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsFillPeopleFill} from 'react-icons/bs'
import {FaRegHandshake} from 'react-icons/fa'
import logo1 from '../img/logo.jpeg'
import logo2 from '../img/phone.jpeg'


function bosh() {
  window.location="/Home"
}


export default function Navbar() {
  return (
    <div>
       <div className="navbar">
        <div className="nav-2">
        <div className="nav-logo">
          <img src={logo1} onClick={()=> bosh()} className='logo1' />
        </div>
        <div className="nav-links">
            <h4><a href="#" ><HiOutlineNewspaper className='ico'/>Новости</a></h4>
            <h4><a href="#" ><BsFillCalculatorFill className='ic'/>Калькуляторы</a></h4>
            <h4><a href="#" ><FaRegHandshake className='ico'/>Партнеры</a></h4>
            <h4><a href="#" ><RiFileEditLine className='ic'/>Стать партнером</a></h4>
            <h4><a href="#" ><ImPriceTags className='ic'/>Программа лояльности</a></h4>
        </div>
        <div className="nav-logo2">
            <img src={logo2} className='logo2' alt="" />
        </div>
        </div>
        
        <div className="nav-bot-link">
          <h4>Гарантия</h4>
          <h4>Оставить претензию</h4>
          <button className='nav-btn'><BsFillTelephoneFill className='ic1'/>Перезвоните мне</button>
          <button className='nav-btn2'><BsFillPeopleFill className='ic1'/>Личный кабинет</button>
        </div>
       </div>
    </div>
  )
}
