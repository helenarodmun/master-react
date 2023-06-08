import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import SecondComponent from './SecondComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a la página de Helena
        </p>  
        
      {/* Cargar primer componente */}
      <div className='components'>
      <hr/>
      <SecondComponent/>
      <hr/>
      <MyComponent/>
      </div>
     
     
      </header>
    </div>
  );
}

export default App;
