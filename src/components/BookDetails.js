import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li
      className='book'
      onClick={() => removeBook(book.title, book.author, book.id, book.addedOn)}
    >
      <div>Title: {book.title}</div>
      <div>Author: {book.author}</div>
      <div>Added on: {book.addedOn}</div>
    </li>
  );
};

export default BookDetails;
