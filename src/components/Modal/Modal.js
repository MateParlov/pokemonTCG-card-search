import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../UI/Backdrop/Backdrop';

import PropTypes from 'prop-types';

const Modal = props => {
  const { show, children, switchShow } = props;

  return (
    <React.Fragment>
      {show ? <Backdrop click={switchShow} /> : null}
      <div
        style={{ display: show ? 'block' : 'none' }}
        className={styles.Modal}
      >
        {children}
      </div>
    </React.Fragment>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  switchShow: PropTypes.func.isRequired
};

export default Modal;
