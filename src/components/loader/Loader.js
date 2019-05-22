import React from 'react';
import styles from './Loader.css';
import spinner from '../../../assets/loader.png';

export default function Loader() {
  return <img className={styles.Loader} src={spinner} />;
}
