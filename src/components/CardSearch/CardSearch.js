import React from 'react';
import styles from './CardSearch.module.css';
import PropTypes from 'prop-types';
import CardFilter from '../CardFilter/CardFilter';
//TODO:: Dodati autofill na search

class CardSearch extends React.Component {
  static propTypes = {
    searchName: PropTypes.func.isRequired
  };

  state = {
    name: '',
    types: [
      'Colorless',
      'Fire',
      'Grass',
      'Water',
      'Lightning',
      'Psychic',
      'Fighting',
      'Darkness',
      'Fairy',
      'Metal',
      'Dragon'
    ]
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.searchName(this.state.name);
    this.setState({ name: '' });
  };
  handleInput = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleFilterType = type => {
    this.props.switchFilterType(type);
  };
  render() {
    return (
      <div className={styles.CardSearch}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <label>Pokemon Name: </label>
          <input
            name="name"
            type="text"
            onChange={this.handleInput}
            value={this.state.name}
          />
          <button type="submit">Search</button>
        </form>
        <button className={styles.filterBtn}>filter</button>
        <CardFilter
          typesArray={this.props.typesArray}
          types={this.state.types}
          handleFilterType={this.handleFilterType}
        />
      </div>
    );
  }
}

export default CardSearch;
