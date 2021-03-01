
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cart from './components/Cart';
import Products from './components/Products';
import BaseLayout from './components/layout/BaseLayout';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './reducers/cartReducer'
import CartHooks from './components/hooks/Cart'

//redux
import {createStore} from 'redux';  //Redux.createStore()
import {Provider} from 'react-redux'

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //initialize redux - reducer

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/products' component={Products}/>
            <Route path='/cart_hooks' component={CartHooks}/>
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

