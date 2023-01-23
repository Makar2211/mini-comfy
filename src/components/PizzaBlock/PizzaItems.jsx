import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromFavouriteItem, setAddFavouriteItem } from '../../redux/slices/FavouriteSlice';

export const PizzaItems = (item) => {
  const dispatch = useDispatch();
  const favouriteItems = useSelector((state) => state.favouriteSlice.favouriteItems);

  const findInFavourite = favouriteItems.some((favouriteItem) => favouriteItem.id === item.id);
  const handelToFavoutite = (e) => {
    e.stopPropagation();
    if (findInFavourite) {
      dispatch(removeFromFavouriteItem(item.id));
    } else {
      dispatch(setAddFavouriteItem(item));
    }
  };

  return (
    <div className='item'>
      <MdFavoriteBorder
        onClick={handelToFavoutite}
        className={findInFavourite ? 'item-favourite-orange' : 'item-favourite'}
      />
      <div>
        <img src={item.imageUrl} alt='logo_comfy' />
      </div>
      <Link to='/'>
        <span>{item.title}</span>
      </Link>
      <div className='item-footer'>
        <div className='price'>{item.price} ₴</div>
        <button className='item-footer-cart'>
          <AiOutlineShoppingCart className='cart-icon' />
        </button>
      </div>
    </div>
  );
};
