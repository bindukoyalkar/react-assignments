import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux'
/* //ACTION INCREMENT
const increment =()=>{
  return {
    type:'INCREMENT' 
  }
}

//ACTION DECREMENT
const decrement =()=>{
  return {
    type:'DECREMENT' 
  }
}

//REDUCER
const counter =(state=0, action:{type:string})=>{
  switch(action.type){
    case 'INCREMENT':
        return state+1;
    case 'DECREMENT':
        return state-1;
  }
};

let store=createStore(counter);

//display it in the console
store.subscribe(()=>console.log(store.getState()));

//DISPATCH
store.dispatch(increment());
store.dispatch(decrement()); */

const store=createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>

,
  document.getElementById('root')
);

reportWebVitals();
