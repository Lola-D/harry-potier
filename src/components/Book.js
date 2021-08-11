import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addToCart } from '../store/booksActions';
import Button from './Button';
import './book.css';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const [showSynopsis, setShowSynopsis] = useState(false);

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  return (
    <div className="book-container">
      <button
        onClick={() => setShowSynopsis(!showSynopsis)}
        className={
          !showSynopsis
            ? "book-top hidden"
            : "book-top visible"
        }
      >
        {
          !showSynopsis
            ? <img
              src={book.cover}
              alt={book.title}
              className="book-cover"
            />
          : <div className="book-synopsis">
              <p className="book-synopsis-label">Résumé :</p>
              {
                book.synopsis.map((text, index) => (
                  <p key={index} className="book-synopsis-text">
                    {text}
                  </p>
                ))
              }
            </div>
        }
      </button>
      <div>
        <p className="book-title">{book.title}</p>
        <p className="book-price">{book.price} €</p>
      </div>
      <Button
        handleClick={() => handleAddToCart(book)}
        label="Ajouter au panier"
        kind="book"
      />
    </div>
  );
};

export default Book;