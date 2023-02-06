import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PizzaItems } from '../components/PizzaBlock/PizzaItems';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { Category } from '../components/Category';
import { Sort } from '../components/Sort';
import { Input } from '../components/Input/Input';
import { fetchItems } from '../redux/slices/itemsSlice';
import { selectItems, selectLoading, selectError } from '../redux/slices/itemsSlice';

export const Home = () => {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.filterSlice.category);
  const sortCategory = useSelector((state) => state.filterSlice.sort.sortProperty);
  const searchValue = useSelector((state) => state.filterSlice.searchInput);
  const items = useSelector(selectItems);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  React.useEffect(() => {
    dispatch(
      fetchItems({
        category,
        sortCategory,
        searchValue,
      }),
    );
  }, [category, sortCategory, searchValue]);

  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
  const pizzas = items.map((item) => {
    return <PizzaItems key={item.id} {...item} />;
  });
  return (
    <div className='main'>
      <div className='main-header'>
        <h1>Каталог товарів</h1>
        <Input />
      </div>
      <div className='main-sorts'>
        <Category />
        <Sort />
      </div>
      <div className='main-items'>{loading ? skeletons : pizzas}</div>
    </div>
  );
};
