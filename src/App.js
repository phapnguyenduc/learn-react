// import './App.css';
import React, { useEffect }  from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import productApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10
      }
      const productList = await productApi.getAll(params);
      console.log(productList);
    }

    fetchProducts();
  }, []);

  return (
    <div className="App">
      Home
      {/* <p><Link to="/todos">Todo</Link></p>
      <p><Link to="/albums">Album</Link></p> */}

      <p><NavLink to="/todos" activeClassName="active-menu">Todo</NavLink></p>
      <p><NavLink to="/albums" activeClassName="active">Album</NavLink></p>
      <Switch>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;