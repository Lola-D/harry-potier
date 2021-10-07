import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";

import { selectedBooksSelector } from '../store/booksSelectors';
import './navbar.css';

const NavBar = () => {
  const selectedBooks = useSelector(selectedBooksSelector);
  const [booksCount, setBooksCount] = useState(0);

  useEffect(() => {
    const booksTotal = selectedBooks.reduce((prev, cur) => {
      return prev + cur.quantity;
    }, 0);
    setBooksCount(booksTotal);
  }, [selectedBooks]);

  return (
    <div className="navbar-container">
      <Link to='/' className="navbar-link brand">Book Shop</Link>
      <Link to='/mon-panier' className="navbar-link cart-group">
        <div className="navbar-link cart">
          <FaShoppingCart style={{fontSize: '1.5rem'}}/>
          <p className="navbar-cart-text">Panier</p>
        </div>
        <span className="navbar-count"> {booksCount}</span>
      </Link>
    </div>
  );
};

export default NavBar;