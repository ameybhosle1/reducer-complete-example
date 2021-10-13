import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
function Reducce(count , action) {
  switch (action.type) {
    case 'increment':
      return count + 1;
    case 'decrement':
      return count - 1;
    default:
      break;
  }
}

function App() {
  const [count , dispatch ] = useReducer(Reducce , 0)
  function decrement() {
    dispatch({type:'increment'})
  }
  function increment() {
    
  }
  
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
