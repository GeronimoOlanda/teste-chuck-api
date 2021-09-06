import React from 'react';
import './index.css';
import P from 'prop-types';

export const Card = ({ value }) => {
  return (
    <div className="Card">
      <p key={value.id}>{value.joke}</p>
    </div>
  );
};
Card.propTypes = {
  value: P.object,
};
export default Card;
