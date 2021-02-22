import './App.css';
import { useSelector,useDispatch } from "react-redux";
import { decrement, increment } from "./Actions/index";

function App() {
  const counter = useSelector((state)=>(  state.counter  ));
  const islogged=useSelector((state)=>( state.islogged ));

  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=>{dispatch(increment(5))}}>+</button>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
      

      {islogged ? <h3>A vlauable information i Shold'd see </h3> : null}
      
    </div>
  );
}

export default App;
