import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Cart from './pages/Cart';
import Home from './pages/Home';

import store from './store';
import { fetchBooks } from './store/booksActions';

store.dispatch(fetchBooks);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mon-panier" component={Cart} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;