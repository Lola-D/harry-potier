
import { useSelector, useDispatch } from 'react-redux';

import { filterBooks } from '../store/filterActions'
import { filterSelector } from '../store/filterSelectors';
import Book from '../components/Book';
import NavBar from '../components/NavBar';
import Search from '../components/Search';
import './home.css';

const Home = () => {
  const dispatch = useDispatch();
  const filteredBooks = useSelector(filterSelector);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    dispatch(filterBooks(value));
  };

  return (
    <div>
      <NavBar />
      <div className="home-container">
        <Search
          handleSearch={handleSearch}
          label="Rechercher par titre :"
        />
        <div className="home-list">
        {
          filteredBooks.length > 0
          ? filteredBooks.map((book) => (
              <Book
                key={book.isbn}
                book={book}
              />
            ))
          : <p>Pas de  résultat.</p>
        }
        </div>
      </div>
    </div>
  );
}

export default Home;