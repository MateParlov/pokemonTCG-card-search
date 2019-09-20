import React from 'react';
import PropTypes from 'prop-types';
const Card = props => {
  const { imageUrl, name } = props.card;

  const imgStyle = {
    maxWidth: '200px',
    maxHeight: '300px',
    margin: '10px 0'
  };

  const handleClick = () => {
    props.click(props.card);
  };
  return (
    <React.Fragment>
      <img src={imageUrl} style={imgStyle} alt={name} onClick={handleClick} />
    </React.Fragment>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired
};

export default Card;
