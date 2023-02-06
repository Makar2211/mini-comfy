import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { FavouriteNotFound } from '../components/FavouriteNotFound/FavouriteNotFound';
import { removeFromFavouriteItem } from '../redux/slices/FavouriteSlice';

export const Favourite = ({ id }) => {
  const dispatch = useDispatch();
  const favouriteItems = useSelector((state) => state.favouriteSlice.favouriteItems);

  const handelcloseFavoutite = () => {
    dispatch(removeFromFavouriteItem(console.log(id)));
  };
  return (
    <>
      {favouriteItems.length > 0 ? (
        <>
          <div className='main-items'>
            {favouriteItems.map((item) => (
              <div className='item' key={item.id}>
                <MdFavoriteBorder
                  onClick={() => handelcloseFavoutite()}
                  className='item-favourite-orange'
                />
                <div>
                  <img src={item.imageUrl} alt='logo_comfy' />
                </div>
                <span>{item.title}</span>
                <div className='item-footer'>
                  <div className='price'>{item.price} ₴</div>
                  <button className='item-footer-cart'>
                    <AiOutlineShoppingCart className='cart-icon' />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <FavouriteNotFound />
      )}
    </>
  );
};
