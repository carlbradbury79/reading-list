import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const FinishedBooks = () => {
  const { finishedBooks } = useContext(BookContext);
  console.log('FB', finishedBooks);

  const compareDates = (added, finished) => {
    console.log(added, finished);
    const dateAdded = new Date(added);
    const dateFinished = new Date(finished);
    console.log(dateAdded, dateFinished);
    return dateAdded - dateFinished;
  };

  return finishedBooks.length ? (
    <div className='finishedBooks'>
      <h2>Finished Books</h2>
      <ul>
        {finishedBooks.map(book => {
          return (
            <li>
              {book.title}/{book.author} Finished on {book.finishedOn} taking{' '}
              {compareDates(book.addedOn, book.finishedOn)} days
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div className='finishedBooks'>
      <h2>Finished Books</h2>
      <p>You haven't read any books!</p>
    </div>
  );
};

export default FinishedBooks;
