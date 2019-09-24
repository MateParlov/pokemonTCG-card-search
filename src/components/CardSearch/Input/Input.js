import React from 'react';
import styles from './Input.module.css';
const CardSearchInput = props => {
  const { selectSuggestion, suggestions, value, onChange } = props;

  //take suggestions array and if there is something render that
  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => {
          return <li onClick={selectSuggestion.bind(this, item)}>{item}</li>;
        })}
      </ul>
    );
  };

  return (
    <div className={styles.CardSearchInput}>
      <input
        className={styles.SearchInput}
        name="name"
        type="text"
        onChange={onChange}
        autoComplete="off"
        value={value}
      />
      {renderSuggestions()}
    </div>
  );
};

export default CardSearchInput;
