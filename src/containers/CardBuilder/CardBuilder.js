import React, { Component } from 'react';
import styles from './CardBuilder.module.css';
import CardSearch from '../../components/CardSearch/CardSearch';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import CardPreview from '../../components/Card/CardPreview/CardPreview';

class CardBuilder extends Component {
  state = {
    cards: [],
    searchedPokemon: '',
    previewCard: {},
    showModule: false
  };
  switchShow = () => {
    this.setState(state => {
      return { showModule: !state.showModule };
    });
  };
  previewCard = card => {
    console.log(card);
    this.setState({ previewCard: card, showModule: true });
  };

  searchedPokemon = name => {
    this.setState({ searchedPokemon: name });

    fetch('https://api.pokemontcg.io/v1/cards?name=' + name)
      .then(res => res.json())
      .then(data => this.setState({ cards: [...data.cards] }));
  };

  render() {
    const rendPokemons = this.state.cards.map(card => {
      return <Card card={card} key={card.id} click={this.previewCard} />;
    });
    console.log(this.state.cards);
    return (
      <div className={styles.CardBuilder}>
        <Modal switchShow={this.switchShow} show={this.state.showModule}>
          <CardPreview card={this.state.previewCard} />
        </Modal>
        <CardSearch searchName={this.searchedPokemon} />
        <div className={styles.Display}>{rendPokemons}</div>
      </div>
    );
  }
}

export default CardBuilder;
