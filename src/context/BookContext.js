import React, { createContext, useState, useEffect } from 'react';

export const BookContext = createContext();

const BookContextProvider = props => {
  const localData = localStorage.getItem('books');
  const localFinishedData = localStorage.getItem('finishedBooks');
  console.log('finished', localFinishedData);
  const [books, setBooks] = useState(localData ? JSON.parse(localData) : []);
  const [finishedBooks, setFinishedBooks] = useState(
    localFinishedData ? JSON.parse(localFinishedData) : []
  );
  console.log('finished', finishedBooks);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
    localStorage.setItem('finishedBooks', JSON.stringify(finishedBooks));
  });

  const addBook = (title, author, id) => {
    const addedOn = getTimeStamp();
    setBooks([...books, { title, author, id, addedOn }]);
  };

  const getTimeStamp = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const removeBook = (title, author, id, addedOn) => {
    // const finishedOn = getTimeStamp();
    const finishedOn = getTimeStamp();
    setFinishedBooks([
      ...finishedBooks,
      { title, author, id, addedOn, finishedOn }
    ]);
    setBooks(books.filter(book => book.title !== title));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook, finishedBooks }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
