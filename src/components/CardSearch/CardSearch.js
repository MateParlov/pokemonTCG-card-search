import React from 'react';
import styles from './CardSearch.module.css';
import PropTypes from 'prop-types';
import CardFilter from '../CardFilter/CardFilter';
import CardSearchInput from './Input/Input';
import POKEMON_NAMES from './../../assets/data/pokemonNames';

const POKEMON_TYPES = [
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
];

class CardSearch extends React.Component {
  static propTypes = {
    searchName: PropTypes.func.isRequired,
    typesArray: PropTypes.array.isRequired,
    switchFilterType: PropTypes.func.isRequired
  };

  state = {
    name: '',
    types: POKEMON_TYPES,
    pokemonSuggestion: [],
    showFilter: false
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.searchName(this.state.name);
    this.setState({ name: '' });
  };
  handleInput = e => {
    const { name, value } = e.target;
    let suggestions = [];

    //if there is value we look at array of pokemon names and put match into pokemonSuggestion array so we can show suggestions
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = POKEMON_NAMES.sort().filter(v => regex.test(v));
    }
    this.setState(() => {
      return { [name]: value, pokemonSuggestion: suggestions };
    });
  };

  //on click function that is passed to input to handle autofill choice
  selectSuggestion = name => {
    this.setState(() => {
      return { name, pokemonSuggestion: [] };
    });
  };

  handleFilterType = type => {
    this.props.switchFilterType(type);
  };

  //open/close filter
  switchFilter = e => {
    this.setState(state => {
      return { showFilter: !state.showFilter };
    });
  };

  render() {
    const { types, showFilter, pokemonSuggestion } = this.state;
    return (
      <div className={styles.CardSearch}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <label>Pokemon Name: </label>
          <CardSearchInput
            value={this.state.name}
            onChange={this.handleInput}
            suggestions={pokemonSuggestion}
            selectSuggestion={this.selectSuggestion}
          />

          <button type="submit">Search</button>
        </form>
        <button className={styles.filterBtn} onClick={this.switchFilter}>
          filter
        </button>
        <CardFilter
          selectedSetFn={this.props.selectedSetFn}
          selectedOption={this.props.selectedOption}
          show={showFilter}
          typesArray={this.props.typesArray}
          types={types}
          handleFilterType={this.handleFilterType}
        />
      </div>
    );
  }
}

export default CardSearch;
