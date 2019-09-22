import React from 'react';
import styles from './CardSearch.module.css';
import PropTypes from 'prop-types';
//TODO:: Dodati autofill na search

class CardSearch extends React.Component {
  static propTypes = {
    searchName: PropTypes.func.isRequired
  };

  state = {
    name: '',
    types: ['fire', 'thunder', 'darkness', 'metal', 'grass', 'poison', 'ground']
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

  handleFilterType = e => {
    const type = e.target.value;
    this.props.switchFilterType(type);
  };
  render() {
    return (
      <div className={styles.CardSearch}>
        <button className={styles.filterBtn}>filter</button>
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
        <div className={styles.Filter}>
          <form>
            <label>Type: </label>
            {this.state.types.map(type => {
              return (
                <React.Fragment>
                  <input
                    type="checkbox"
                    value={type}
                    name={type}
                    onClick={this.handleFilterType}
                  />
                  <span>{type}</span>
                </React.Fragment>
              );
            })}
          </form>
        </div>
      </div>
    );
  }
}

export default CardSearch;
