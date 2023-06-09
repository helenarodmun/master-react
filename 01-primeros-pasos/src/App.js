import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import EventsComponent from './EventsComponent';

function App() {

  const medical_form = {
    height: '164cm',
    blood_group: 'A+',
    state: 'good',
    allergies: 'none'
  }

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
        <EventsComponent/>
      <hr/>
      <ThirdComponent 
        file={medical_form}
        />
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
