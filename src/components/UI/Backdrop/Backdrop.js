import React from 'react';
import styles from './Backdrop.module.css';
import PropTypes from 'prop-types';
const Backdrop = ({ click }) => {
  return <div className={styles.Backdrop} onClick={click}></div>;
};

Backdrop.propTypes = {
  click: PropTypes.func.isRequired
};

export default Backdrop;
