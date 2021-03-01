import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Todo from './components/Todo'
import BaseLayout from './components/layout/BaseLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import  './assets/styles.css'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faTrash, faPencilAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, far, faCheckSquare, faTrash, faPencilAlt, faStar)

const saveToLocalStorage = (reduxGlobalState) =>{
  //serialization = converting js obj to a str
  try{
    const serializeState = JSON.stringify(reduxGlobalState);
    localStorage.setItem('state', serializeState);
  }
  catch(e){
    console.log(e);
  }
}

const loadFromLocalStorage = () =>{
  const serializeState = localStorage.getItem('state');

  if(serializeState ===null){
    return undefined;
  }
  else{
    return JSON.parse(serializeState); //returns JS obj representing local storage
  }
}

const persistedState = loadFromLocalStorage();



//initializing redux store //requires reducer. second argument is for redux dev-tools extension
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//use to grab what is inside of state
store.subscribe(()=>{
  saveToLocalStorage(store.getState());
})

ReactDOM.render( //component hierachy 
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path ="/" component={App}/>
            <Route path ="/hooks" component={Hooks}/>
            <Route path ="/classes" component={Classes}/>
            <Route path ="/todo" component={Todo}/>
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
</React.StrictMode>,
  document.getElementById('root')
);


