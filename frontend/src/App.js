import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainNavigation from './components/MainNavigation/MainNavigation';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import FaqPage from './pages/FaqPage';
import ProductDescPage from './pages/ProductDescPage/ProductDescPage';

function App() {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/faq" exact component={FaqPage} />
        <Route path="/product-description" exact component={ProductDescPage} />
      </Switch>
    </Router>
  );
}

export default App;
