import React from 'react';
import { BtnBack } from '../BtnBack/BtnBack';
import style from './FavouriteNotFound.module.scss';

export const FavouriteNotFound = () => {
  return (
    <div className={style.notFound}>
      <div className='notFoundCatner'>
        <span className={style.FavouriteTitle}>У вас немає закладинок</span>
        <img src='http://festmall.ru/wp-content/uploads/2016/07/zelenyj.jpg' alt='' />
        <BtnBack />
      </div>
    </div>
  );
};
