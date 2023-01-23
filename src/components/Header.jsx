import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const cities = ['Dnipro', 'Kiev', 'Kharkiv', 'Odessa', 'Zaporozhye', 'Lviv'];

export const Header = () => {
  const [categoryCity, setCategoryCity] = React.useState(0);
  const [modal, setModal] = React.useState(false);
  const cityName = cities[categoryCity];
  const changeCity = (index) => {
    setCategoryCity(index);
    setModal(false);
  };
  return (
    <header className='header'>
      <Link to=''>
        <div className='left'>
          <img src='../img/logo_comfy.svg' alt='logo_comfy' />
        </div>
      </Link>
      <div className='right'>
        <div className='right-pop' onClick={() => setModal(!modal)}>
          <span>{cityName}</span>
          {modal ? (
            <div className='pop-up-header'>
              <ul>
                {cities.map((city, index) => {
                  return (
                    <li
                      className={index === categoryCity ? 'active' : ''}
                      onClick={() => changeCity(index)}
                      key={index}
                    >
                      {city}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
          {modal ? (
            <RiArrowDropUpLine className='arrow' />
          ) : (
            <RiArrowDropDownLine className='arrow' />
          )}
        </div>
        <Link to='favourites'>
          <div className='fovourite'>
            <MdFavoriteBorder className='fovourite-icon' />
          </div>
        </Link>
        <div className='cart'>
          <AiOutlineShoppingCart className='cart-icon' />
          <span>Кошик</span>
        </div>
      </div>
    </header>
  );
};
