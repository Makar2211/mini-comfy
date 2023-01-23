import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setSerachInput } from '../../redux/slices/filterSlice';

export const Input = () => {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState('');
  const ref = React.useRef();
  const OnChangeInput = (event) => {
    setValue(event.target.value);
    dispatch(setSerachInput(event.target.value));
  };
  return (
    <div className='inputSearch'>
      <AiOutlineSearch className='input-serach' />
      <input
        ref={ref}
        type='text'
        value={value}
        onChange={(event) => OnChangeInput(event)}
        placeholder='Пошук'
      />
    </div>
  );
};
