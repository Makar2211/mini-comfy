import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCatalog } from '../redux/slices/filterSlice';

export const Category = () => {
  const categotyItems = ['Усі', 'Телефони', `Комп'ютери`, 'Телевізори', 'Ігрові консолі'];
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.filterSlice.category);
  const onClickCategory = (index) => {
    dispatch(setCatalog(index));
  };
  return (
    <div className='catalog'>
      <ul>
        {categotyItems.map((category, index) => {
          return (
            <li
              key={index}
              className={categories === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
