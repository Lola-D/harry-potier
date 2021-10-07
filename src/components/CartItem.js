import { useDispatch } from 'react-redux';

import { addToCart, removeFromCart, subQuantity } from '../store/booksActions';
import Button from './Button';
import './cart-item.css';

const CartItem = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div key={book.isbn} className="cart-item-container">
      <div className="cart-item-left">
        <img src={book.cover} alt={book.title} className="cart-item-cover" />
        <div>
          <p className="cart-book-title">{book.title}</p>
          <p className="cart-item-book-price">prix unitaire: {book.price} €</p>
        </div>
      </div>
      <div className="cart-item-quantity-group">
        <p>quantité: {book.quantity}</p>
        <div>
          <Button
            handleClick={() => dispatch(subQuantity(book))}
            kind="sub"
          />
          <Button
            handleClick={() => dispatch(addToCart(book))}
            kind="add"
          />
          </div>
      </div>
      <Button
        handleClick={() => dispatch(removeFromCart(book))}
        kind="remove"
      />
    </div>
  );
};

export default CartItem;