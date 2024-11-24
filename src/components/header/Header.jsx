import React from 'react'
import "./Header.scss"
import Logo from "../../assets/Logo-3.svg"
import Search from "../../assets/search.svg"
import Bag from "../../assets/shopping-bag.svg"

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
          <nav className='header__nav'>
          <div>
          <ul>
            <li className='dif_color'><a href="#"></a><span>Home</span></li>
            <li><a href="#"></a><span>About</span></li>
            <li><a href="#"></a><span>Menu</span></li>
            <li><a href="#"></a><span>Reservation</span></li>
          </ul>
          </div>
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div>
          <ul>
            <li><a href="#"></a><span>Pages</span></li>
            <li><a href="#"></a><span>Shop</span></li>
            <li><a href="#"></a><span>Contact</span></li>
            <img src={Search} alt="search" />
            <img src={Bag} alt="bag" />
          </ul>
          </div>
          </nav>
        </div>
    </header>
  )
}

export default Header