import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { PizzaItems } from '../components/PizzaBlock/PizzaItems';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { Category } from '../components/Category';
import { Sort } from '../components/Sort';
import { Input } from '../components/Input/Input';
import { Favourite } from './Favourite';
export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const category = useSelector((state) => state.filterSlice.category);
  const sortCategory = useSelector((state) => state.filterSlice.sort.sortProperty);
  const searchValue = useSelector((state) => state.filterSlice.searchInput);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://639c650e42e3ad6927305a65.mockapi.io/items?${
          category > 0 ? `category=${category}` : ''
        }&sortBy=${sortCategory.replace('-', '')}&order=${
          sortCategory.includes('-') ? 'asc' : 'desc'
        }${searchValue ? `&search=${searchValue}` : ''}`,
      )
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      });
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
