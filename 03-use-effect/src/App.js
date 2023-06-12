import logo from './logo.svg';
import './App.css';
import TestsComponent from './components/TestsComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
       
       <TestsComponent />
      </header>
    </div>
  );
}

export default App;
