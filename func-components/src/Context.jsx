import React, { useContext, createContext, useState } from 'react';

export const CustomContext = createContext();

export const Context = (props) => {
  const [books, setBoks] = useState([
    { id: 1, title: 'JS' },
    { id: 2, title: 'React' },
    { id: 3, title: 'NEXTJS' },
  ]);

  const addBook = (book) => {
    setBoks([book, ...books]);
  };

  const removeBook = (id) => {
    setBoks(books.filter((book) => book.id !== id));
  };

  const value = {
    books,
    addBook,
    removeBook,
  };

  return <CustomContext.Provider value={value}>{props.children}</CustomContext.Provider>;
};
