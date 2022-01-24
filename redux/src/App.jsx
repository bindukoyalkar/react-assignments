import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from './actions';

function App(){
  const counter= useSelector(state=> state.counter);
  const dispatch=useDispatch();
  return (
    <>
   <h1> Counter {counter}</h1>
   <button onClick={()=> dispatch(increment())}>+</button>
   <button onClick={()=> dispatch(decrement())}>-</button>
</>
  );
}
export default App;