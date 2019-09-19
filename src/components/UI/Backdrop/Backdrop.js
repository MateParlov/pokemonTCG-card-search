import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = ({ click }) => {
  return <div className={styles.Backdrop} onClick={click}></div>;
};

export default Backdrop;
