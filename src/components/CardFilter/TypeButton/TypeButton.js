import React from 'react';
import styles from './TypeButton.module.css';
import IconType from './Icons';
const TypeButton = ({ type, clickFn, active }) => {
  const handleClick = () => {
    clickFn(type);
  };
  const iconImg = IconType(type);

  return (
    <React.Fragment>
      <div
        onClick={handleClick}
        className={[styles.TypeButton, active && styles.Active].join(' ')}
      >
        <img src={iconImg} />
      </div>
    </React.Fragment>
  );
};

export default TypeButton;
