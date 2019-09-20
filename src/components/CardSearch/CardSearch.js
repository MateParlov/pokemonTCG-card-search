import React from 'react';
import styles from './CardSearch.module.css';
import PropTypes from 'prop-types';
//TODO:: Dodati autofill na search

class CardSearch extends React.Component {
  static propTypes = {
    searchName: PropTypes.func.isRequired
  };

  state = {
    name: ''
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
  render() {
    return (
      <div className={styles.CardSearch}>
        <form onSubmit={this.handleSubmit}>
          <label>Pokemon Name: </label>
          <input
            name="name"
            type="text"
            onChange={this.handleInput}
            value={this.state.name}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default CardSearch;
