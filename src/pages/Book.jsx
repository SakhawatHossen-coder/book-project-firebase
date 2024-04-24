import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import BookCard from '../components/BookCard';

const Book = () => {
     const loadedBooks=useLoaderData();
     const [books,setBooks]=useState(loadedBooks);
  return (
    <div>Book coming from form

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
               books.map((book,idx)=><BookCard book={book} books={books} setBooks={setBooks} key={idx}/>)
          }
     </div>
    </div>
  )
}

export default Book