import React from 'react';
import BookContextProvider from './context/BookContext';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import FinishedBooks from './components/FinishedBooks';

function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <NavBar />
        <BookList />
        <FinishedBooks />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
