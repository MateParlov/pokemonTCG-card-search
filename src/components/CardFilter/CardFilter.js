import React from 'react';
import styles from './CardFilter.module.css';
import TypeButton from './TypeButton/TypeButton';
import Select from 'react-select';

const SET_ID = [
  { value: '', label: 'ALL' },
  { value: 'sma', label: 'Shiny Vault' },
  { value: 'sm115', label: 'Hiden Fates' },
  { value: 'sm11', label: 'Unified Minds' },
  { value: 'sm10', label: 'Unbroken Bonds' },
  { value: 'det1', label: 'Detective Pikachu' },
  { value: 'sm9', label: 'Team Up' },
  { value: 'sm8', label: 'Lost Thunder' },
  { value: 'sm75', label: 'Dragon Majesty' },
  { value: 'sm7', label: 'Celestial Storm' },
  { value: 'base5', label: 'Team Rocket' },
  { value: 'base4', label: 'Base Set 2' },
  { value: 'base3', label: 'Fosil' },
  { value: 'basep', label: 'Wizards Black Star Promos' },
  { value: 'base2', label: 'Jungle' },
  { value: 'base1', label: 'Base' }
];

const CardFilter = ({
  selectedSetFn,
  types,
  handleFilterType,
  typesArray,
  show,
  selectedOption
}) => {
  const handleSelectChange = selectedOption => {
    selectedSetFn(selectedOption);
  };

  if (show) {
    return (
      <div className={styles.Filter}>
        <div className={styles.TypeFilter}>
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

        <div className={styles.SetFilter}>
          <h1>Set: </h1>
          <Select
            value={selectedOption}
            onChange={handleSelectChange}
            options={SET_ID}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CardFilter;
