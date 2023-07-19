import React from 'react';
import './bool-list-item.scss';

const BoolListItem = ({ book }) => {
  const { title, author } = book;

  return (
    <>
      <span>{title}</span>
      <span>{author}</span>
    </>
  );
};

export default BoolListItem;
