import logo from './logo.svg';
import './App.css';
import MyFirstState from './components/MyFirstState';
import ExerciseComponent from './components/ExerciseComponent';

function App() {

  const date = new Date();
  const actualYear = date.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>El estado en React - Hook useState</h1>

       <MyFirstState/>

       <ExerciseComponent year = { actualYear }/>
      </header>
    </div>
  );
}

export default App;
