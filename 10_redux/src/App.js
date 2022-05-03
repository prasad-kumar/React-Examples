import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from './actions/actions';
import './App.css';

function App() {

  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <span onClick={() => dispatch(decNumber())}>-</span>
      <input type="text" value={myState} readOnly/>
      <span onClick={() => dispatch(incNumber())}>+</span>
    </div>
  );
}

export default App;
