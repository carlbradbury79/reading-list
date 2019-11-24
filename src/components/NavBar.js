import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const NavBar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='navBar'>
      <h1>Bradbury's Books</h1>
      <p>
        {books.length} {books.length === 1 ? 'book' : 'books'} left to read
      </p>
    </div>
  );
};

export default NavBar;
