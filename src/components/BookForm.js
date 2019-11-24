import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    console.log(title, author);
    addBook(title, author);
    setTitle('');
    setAuthor('');
  };
  return (
    <form className='bookForm' onSubmit={handleSubmit}>
      <h2>Add a new book</h2>
      <input
        type='text'
        placeholder='Enter title'
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Enter Author'
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input type='submit' value='Add Book' />
    </form>
  );
};

export default BookForm;
