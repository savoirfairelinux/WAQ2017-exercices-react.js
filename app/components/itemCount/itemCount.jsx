import React from 'react';

const ItemCount = ({count, className}) => {
  const displayCount = (count) => {
    if (count > 1 || count === 0) {
      return 'produits';
    }
    return 'produit';
  };
  return (
    <span className={className}>
      {count} {/* TODO Utiliser le fonction displayCount pour afficher le mot produit */}
    </span>
  );
};

ItemCount.propTypes = {
  className: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired
};

export default ItemCount;
