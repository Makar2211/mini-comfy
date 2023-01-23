import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BtnBack.module.scss';

export const BtnBack = () => {
  return (
    <Link to='/'>
      <button className={styles.BackBtn}>На головну</button>
    </Link>
  );
};
