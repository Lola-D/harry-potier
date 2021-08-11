import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { emptyCart } from '../store/booksActions'
import { selectedBooksSelector } from '../store/booksSelectors';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import NavBar from '../components/NavBar';
import './cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const selectedBooks = useSelector(selectedBooksSelector);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [offer, setOffer] = useState();

  const handleOffer = async () => {
    if (selectedBooks.length === 0) {
      setOffer();
      setSubTotal(0);
      setTotal(0);
    };

    if (selectedBooks.length !== 0) {
      let selectedIsbn = [];
      selectedBooks.map((book) => {
        let quantity = book.quantity;
        for (let i = 0; i < quantity; i++) {
          selectedIsbn.push(book.isbn);
        };
        return selectedIsbn.toString();
      });
  
      const { data: { offers } } = await axios.get(
        `https://henri-potier.techx.fr/books/${selectedIsbn}/commercialOffers`
      );
  
      const bestOffer = offers.reduce((prev, curr) => {
        return prev.value < curr.value ? prev : curr;
      });
      setOffer(bestOffer);
  
      const resultSubTotal = selectedBooks.reduce((acc, curr) => {
        let priceWithQuantity = curr.price * curr.quantity;
        return acc + priceWithQuantity;
      }, 0);
      setSubTotal(resultSubTotal);
      setTotal(resultSubTotal - bestOffer.value);
    };
  };

  useEffect(() => {
    handleOffer();
  }, [selectedBooks]);

  return (
    <div>
      <NavBar />
      {
        selectedBooks.length === 0
          ? <p className="cart-list">Vous n'avez pas encore d'acticle dans votre panier.</p>
          : <div className="cart-list">
              {
                selectedBooks.map((book) => (
                  <CartItem book={book} key={book.isbn} />
                ))
              }
            </div>
      }
      <div className="cart-bottom">
        <Button
          handleClick={() => dispatch(emptyCart())}
          label="Vider le panier"
          kind="empty"
        />
        <div>
          <p>Sous-total : <span>{subTotal} €</span></p>
          {
            offer
              && <p> Réduction : <span>-{offer.value} €</span></p>
          }
          <hr className="separator" />
          <p>Total : <span>{total} €</span></p>
        </div>
      </div>
    </div>
  );
};

export default Cart;