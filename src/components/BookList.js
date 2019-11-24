import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className='bookList'>
      <h2>Current Books</h2>
      <ul>
        {books.map(book => {
          return <BookDetails book={book} key={book.id}></BookDetails>;
        })}
      </ul>
    </div>
  ) : (
    <div className='bookList'>
      <h2>Current Books</h2>
      <p>No books to read</p>
    </div>
  );
};

export default BookList;
