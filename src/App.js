import ProductList from './components/productList';
import { BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect } from "react-router-dom";
import ProductDetails from './components/productDetails';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/list" component={ProductList}></Route>
          <Route path="/details/:id" component={ProductDetails} />
          <Redirect path="/" to="/list"></Redirect>
        </Switch>
      </Router>
      {/* <ProductList /> */}
    </div>
  )
}

export default App;