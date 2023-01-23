import React from 'react';
import { setSort } from '../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
const sortArray = [
  { name: 'За популярністю', sortProperty: 'rating' },
  { name: 'Від дешевих до дорогих', sortProperty: '-price' },
  { name: 'Від дорогих до дешевих', sortProperty: 'price' },
];
export const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filterSlice.sort);
  const [modal, setModal] = React.useState(false);

  const onClickModal = () => {
    setModal(!modal);
  };
  const onClickListItem = (item) => {
    dispatch(setSort(item));
    setModal(false);
  };

  return (
    <div className='sort'>
      <span onClick={onClickModal}>{sort.name}</span>
      {modal && (
        <div className='sort-modal'>
          <ul>
            {sortArray.map((item, index) => (
              <li
                key={index}
                onClick={() => onClickListItem(item)}
                className={item.sortProperty === sort.sortProperty ? 'active' : ''}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
