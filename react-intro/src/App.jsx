import './App.css';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
        <h1>Hello & Welcome to Our First React App!!</h1>
        <Counter secretNum={42} secretPhrase={"Open sesame"} startingNum={17}/>
        <Counter secretNum={3}/>
        <Counter secretNum={7}/>
        <Counter startingNum={9001}/>
    </div>
  );
}

export default App;