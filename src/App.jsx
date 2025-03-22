import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement, incByAmount } from './slice/CounterSlice';

function App() {
  const dispatch = useDispatch();

  // Access the counter state from Redux store
  const counter = useSelector((state) => state.counter.value);

  return (
    <>
      <h1>Counter App: {counter}</h1>
      
      
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incByAmount(5))}>+5</button> 
     
    </>
  );
}

export default App;
