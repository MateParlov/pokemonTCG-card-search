import React from 'react';
import styles from './CardFilter.module.css';
import TypeButton from './TypeButton/TypeButton';
const CardFilter = ({ types, handleFilterType, typesArray }) => {
  return (
    <div className={styles.Filter}>
      <h1>Types</h1>
      <div className={styles.IconsBox}>
        {types.map(type => {
          const active = typesArray.indexOf(type);

          return (
            <TypeButton
              key={type}
              active={active === -1 ? false : true}
              type={type}
              clickFn={handleFilterType}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardFilter;
