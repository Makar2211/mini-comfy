import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Favourite } from './pages/Favourite';
import { Home } from './pages/Home';

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path={''} element={<Home />} />
        <Route path={'favourites'} element={<Favourite />} />;
      </Routes>
    </div>
  );
}

export default App;
